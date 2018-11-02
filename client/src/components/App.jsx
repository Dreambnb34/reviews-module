import React, {Component} from 'react';
import {getRatingsArray} from '../libs/appHelpers';
import ReviewCount from './ReviewCount';
import RatingsContainer from './RatingsContainer';
import ReviewFeed from './ReviewFeed';
import Search from './Search';
import Pagination from 'react-paginate';
import network from '../libs/networkHelpers.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listingsId: window.location.href.split('rooms/')[1],
      searchTerm: '',
      reviews: null,
      searchReviews: null,
      page: 1,
      reviewState: 'NormalReviews',
      reviewCount: null,
      accuracyRating: null,
      check_In_Rating: null,
      cleanlinessRating: null,
      communicationRating: null,
      locationRating: null,
      valueRating: null,
      totalAverage: null,
    };

    this.setAllInformation = this.setAllInformation.bind(this);
    this.setReviews = this.setReviews.bind(this);
    this.onPageChange = this.onPageChange.bind(this);
    this.onPageSearch = this.onPageSearch.bind(this);
  }

  componentDidMount() {
    this.getInitialReviews();
  }

  getInitialReviews() {
    this.setState({reviewState: 'NormalReviews'});
    network.fetchReviews(this.state.listingsId, this.state.page).then(res => {
      const reviews = res.data;
      this.setAllInformation(reviews);
    });
  }

  setAllInformation(reviews) {
    console.log(reviews);
    this.setState({
      reviews: reviews,
      reviewCount: reviews.reviewCount,
      accuracyRating: reviews.accuracyRating,
      check_In_Rating: reviews.check_In_Rating,
      cleanlinessRating: reviews.cleanlinessRating,
      communicationRating: reviews.communicationRating,
      locationRating: reviews.locationRating,
      valueRating: reviews.valueRating,
      totalAverage: reviews.totalAverage,
    });
  }

  setReviews(reviews) {
    this.setState({reviews});
  }

  onPageChange(page) {
    let mainPage = page.selected + 1;
    if (this.state.reviewState === 'NormalReviews') {
      network.fetchReviews(this.state.listingsId, mainPage).then(res => {
        const reviews = res.data;
        this.setReviews(reviews);
      });
    } else {
      network
        .fetchReviews(this.state.listingsId, mainPage, this.state.searchTerm)
        .then(res => {
          const reviews = res.data;
          this.setReviews(reviews);
        });
    }
  }

  onPageSearch(searchTerm, page) {
    console.log(`You have searched "${searchTerm}"`);
    this.setState(
      {searchTerm: searchTerm, reviewState: 'SearchedReviews'},
      () => {
        // network call
        this.onPageChange({selected: 0});
      },
    );
  }

  scrollUp() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  render() {
    this.scrollUp();
    {
      return this.state.reviews === null ? (
        <div id="App">Loading...</div>
      ) : (
        <div id="App">
          <div className="app-container">
            <div className="grid-count-search">
              <ReviewCount
                reviewCount={this.state.reviewCount}
                totalAverage={this.state.totalAverage}
              />
              <Search onPageSearch={this.onPageSearch} />
            </div>
            {this.state.reviewState === 'NormalReviews' ? (
              <RatingsContainer
                payload={getRatingsArray({
                  accuracyRating: this.state.accuracyRating,
                  check_In_Rating: this.state.check_In_Rating,
                  cleanlinessRating: this.state.cleanlinessRating,
                  communicationRating: this.state.communicationRating,
                  locationRating: this.state.locationRating,
                  valueRating: this.state.valueRating,
                })}
              />
            ) : (
              <div className="search-information">
                <p className="search-information-sentence">
                  {this.state.reviews.searchReviewCount} guests have mentioned{' '}
                  <b className="search-term">"{this.state.searchTerm}"</b>
                </p>
                <p
                  className="back-to-all-reviews"
                  onClick={() => this.getInitialReviews()}
                >
                  Back to all reviews
                </p>
              </div>
            )}
            <ReviewFeed reviews={this.state.reviews.reviews} />
            <Pagination
              previousLabel={'<'}
              nextLabel={'>'}
              breakLabel={'...'}
              breakClassName={'break-me'}
              pageCount={this.state.reviews.pageNumberCount}
              marginPagesDisplayed={1}
              pageRangeDisplayed={2}
              onPageChange={this.onPageChange}
              containerClassName={'pagination'}
              previousClassName={'previous-pagination'}
              nextClassName={'next-pagination'}
              subContainerClassName={'pages pagination'}
              activeClassName={'active'}
              previousLinkClassName={'previous-pagination-button'}
              nextLinkClassName={'next-pagination-button'}
            />
          </div>
        </div>
      );
    }
  }
}

export default App;

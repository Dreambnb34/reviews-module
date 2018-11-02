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
      reviews: null,
      listingsId: window.location.href.split('rooms/')[1],
      page: 1,
      reviewState: 'NormalReviews',
    };
    this.onPageChange = this.onPageChange.bind(this);
    this.onPageSearch = this.onPageSearch.bind(this);
  }

  componentDidMount() {
    this.getInitialReviews();
  }

  getInitialReviews() {
    network.fetchReviews(this.state.listingsId, this.state.page).then(res => {
      const reviews = res.data;
      this.setReviews(reviews);
    });
  }

  setReviews(reviews) {
    console.log(reviews);
    this.setState({reviews});
  }

  onPageChange(page) {
    let mainPage = page.selected + 1;
    network.fetchReviews(this.state.listingsId, mainPage).then(res => {
      const reviews = res.data;
      this.setReviews(reviews);
    });
  }

  onPageSearch(searchTerm, page) {
    console.log(`You have searched "${searchTerm}"`);
    // network call
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
              <ReviewCount {...this.state.reviews} />
              <Search onPageSearch={this.onPageSearch} />
            </div>
            <RatingsContainer payload={getRatingsArray(this.state.reviews)} />
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

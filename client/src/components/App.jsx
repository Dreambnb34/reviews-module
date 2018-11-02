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
      page: 1,
    };
    this.onPageChange = this.onPageChange.bind(this);
  }

  componentDidMount() {
    this.getInitialReviews();
  }

  getInitialReviews() {
    const listingsId = window.location.href.split('rooms/')[1];
    network.fetchReviews(listingsId, this.state.page).then(res => {
      const reviews = res.data;
      this.setReviews(reviews);
    });
  }

  setReviews(reviews) {
    console.log(reviews);
    this.setState({reviews});
  }

  onPageChange(page) {
    const listingsId = window.location.href.split('rooms/')[1];
    let mainPage = page.selected + 1;
    console.log(mainPage);
    network.fetchReviews(listingsId, mainPage).then(res => {
      const reviews = res.data;
      this.setReviews(reviews);
    });
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
              <Search />
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

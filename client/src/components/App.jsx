import React, {Component} from 'react';
import helper from '../libs/appHelpers';
import ReviewCount from './ReviewCount';
import RatingsContainer from './RatingsContainer';
import ReviewFeed from './ReviewFeed';
import Pagination from 'react-paginate';
import network from '../libs/networkHelpers.js';

// debugging
import mockReturnObj from '../__mocks__/mockReturnObj.js';
import {reviews7} from '../__mocks__/mockReviews';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: null,
    };
  }

  componentDidMount() {
    console.log(window.location.href);
    this.getInitialReviews();
  }

  getInitialReviews() {
    const listingsId = window.location.href.split('rooms/')[1];
    console.log(listingsId);
    network.fetchReviews(listingsId).then(res => {
      const reviews = res.data;
      this.setReviews(reviews);
    });
  }

  setReviews(reviews) {
    console.log(reviews);
    this.setState({reviews});
  }

  render() {
    {
      return this.state.reviews === null ? (
        <div>Loading...</div>
      ) : (
        <div id="App">
          <div className="app-container">
            <ReviewCount
              {...helper.getReviewCount(
                this.state.reviews.reviewCount,
                this.state.reviews.totalAverage,
              )}
            />
            <RatingsContainer
              payload={helper.getRatingsArray(this.state.reviews)}
            />
            <ReviewFeed reviews={this.state.reviews.reviews} />
            <Pagination
              previousLabel={'<'}
              nextLabel={'>'}
              breakLabel={'...'}
              breakClassName={'break-me'}
              pageCount={this.state.reviews.pageNumberCount}
              marginPagesDisplayed={1}
              pageRangeDisplayed={2}
              //  onPageChange={this.handlePageClick}
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

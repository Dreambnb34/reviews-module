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
      ratingsObj: null,
      reviewCountObj: null,
    };
  }

  componentDidMount() {
    console.log(window.location.href);
    network.fetchReviews('638').then(res => {});
  }

  render() {
    return (
      <div id="App">
        <div className="app-container">
          <ReviewCount {...helper.getReviewCount(178, 3.5)} />
          <RatingsContainer
            payload={helper.getRatingsArray(mockReturnObj.mockReturnObj)}
          />
          <ReviewFeed reviews={reviews7} />
          <Pagination
            previousLabel={'<'}
            nextLabel={'>'}
            breakLabel={'...'}
            breakClassName={'break-me'}
            pageCount={26}
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

export default App;

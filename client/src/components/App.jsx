import React, {Component} from 'react';
import helper from '../libs/appHelpers';
import ReviewCount from './ReviewCount';
import RatingsContainer from './RatingsContainer';
import ReviewFeed from './ReviewFeed';
import Pagination from 'react-paginate';

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

  render() {
    return (
      <div id="App">
        <ReviewCount {...helper.getReviewCount(50, 4.5)} />
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
          pageRangeDisplayed={3}
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
    );
  }
}

export default App;

{
  /* <ReviewCount reviewCount={reviews7.length} rating={4.5} />
<Ratings {...testObj1} />
<Ratings {...testObj2} />
<Ratings {...testObj3} />
<Ratings {...testObj4} />
<Ratings {...testObj5} />
<Ratings {...testObj6} />
<ReviewFeed reviews={reviews7} /> */
}

// const testObj1 = {
//   label: 'Accuracy',
//   rating: 4.7,
// };

// const testObj2 = {
//   label: 'Coomunication',
//   rating: 3.5,
// };

// const testObj3 = {
//   label: 'Cleanliness',
//   rating: 2.5,
// };

// const testObj4 = {
//   label: 'Location',
//   rating: 4.6,
// };

// const testObj5 = {
//   label: 'Check-In',
//   rating: 4,
// };

// const testObj6 = {
//   label: 'Value',
//   rating: 1.6,
// };

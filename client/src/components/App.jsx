import React, {Component} from 'react';
// import ReviewCount from './ReviewCount/ReviewCount';

import ReviewFeed from './ReviewFeed';
import {reviews7} from '../__mocks__/mockReviews';

import Stars from './Modular/Stars/Stars';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="App">
        {/* <ReviewFeed reviews={reviews7} /> */}
        <Stars count={2.5} />
      </div>
    );
  }
}

export default App;

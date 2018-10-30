import React, {Component} from 'react';
// import ReviewCount from './ReviewCount/ReviewCount';

import ReviewFeed from './ReviewFeed';
import {reviews7} from '../__mocks__/mockReviews';

// import Stars from './Modular/Stars/Stars';
import Ratings from '../components/Modular/Ratings';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="App">
        {/* <ReviewFeed reviews={reviews7} /> */}
        <Ratings label="Moooooo" />
      </div>
    );
  }
}

export default App;

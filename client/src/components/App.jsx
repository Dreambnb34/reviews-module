import React, {Component} from 'react';
// import ReviewCount from './ReviewCount/ReviewCount';

import ReviewFeed from './ReviewFeed';
import {reviews7} from '../__mocks__/mockReviews';

// import Stars from './Modular/Stars/Stars';
import Ratings from '../components/Modular/Ratings';
import ReviewCount from './ReviewCount';

const testObj1 = {
  label: 'Accuracy',
  rating: 4.7,
};

const testObj2 = {
  label: 'Coomunication',
  rating: 3.5,
};

const testObj3 = {
  label: 'Cleanliness',
  rating: 2.5,
};

const testObj4 = {
  label: 'Location',
  rating: 4.6,
};

const testObj5 = {
  label: 'Check-In',
  rating: 4,
};

const testObj6 = {
  label: 'Value',
  rating: 1.6,
};

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="App">
        <ReviewCount reviewCount={reviews7.length} rating={4.5} />
        <Ratings {...testObj1} />
        <Ratings {...testObj2} />
        <Ratings {...testObj3} />
        <Ratings {...testObj4} />
        <Ratings {...testObj5} />
        <Ratings {...testObj6} />
        <ReviewFeed reviews={reviews7} />
      </div>
    );
  }
}

export default App;

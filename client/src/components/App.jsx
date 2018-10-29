import React, {Component} from 'react';
import ReviewCount from './ReviewCount/ReviewCount';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Hello Rohan</h1>
        <ReviewCount />
      </div>
    );
  }
}

export default App;

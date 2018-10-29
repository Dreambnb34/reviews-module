import React, {Component} from 'react';
import ReviewCount from './ReviewCount/ReviewCount';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="App">
        <ReviewCount />
      </div>
    );
  }
}

export default App;

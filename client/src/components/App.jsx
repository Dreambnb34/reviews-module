import React, {Component} from 'react';
// import ReviewCount from './ReviewCount/ReviewCount';
import Review from './Modular/Review';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="App">
        <Review
          username="Mooooooo"
          avatarURL="https://hrr34-jaypatrickdeguzman-fec.s3.amazonaws.com/FEC/avatar_photos/62dsfsdfsdf.jpg"
        />
      </div>
    );
  }
}

export default App;

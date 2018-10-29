import React, {Component} from 'react';
import Moment from 'moment';

class Review extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {username, postDate, avatarURL} = this.props;
    return (
      <div>
        <img
          src={avatarURL}
          height="48"
          width="48"
          data-testid="avatar-container"
        />
        <div data-testid="username-container">{username}</div>
        <div data-testid="createdAt-container">
          {Moment(postDate).format('MMMM YYYY')}
        </div>
      </div>
    );
  }
}

export default Review;

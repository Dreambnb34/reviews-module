import React, {Component} from 'react';

class Review extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {username, postDate, avatarURL} = this.props;
    return (
      <div>
        <img src={avatarURL} height="48" width="48" />
        <div data-testid="username-container">{username}</div>
        <div data-testid="createdAt-container">{postDate}</div>
      </div>
    );
  }
}

export default Review;

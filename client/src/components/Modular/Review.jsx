import React, {Component} from 'react';
import Moment from 'moment';

class Review extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFullReview: false,
    };

    this.showFullReview = this.showFullReview.bind(this);
  }

  showFullReview() {
    this.setState({isFullReview: true});
  }

  render() {
    const {username, postDate, avatarURL, reviewText = ''} = this.props;
    const {isFullReview} = this.state;
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
        <div data-testid="review-text-container">
          <h3>
            <p>
              {reviewText.length > 278 && !isFullReview
                ? `${reviewText
                    .split('')
                    .slice(0, 278)
                    .join('')}...`
                : reviewText}
            </p>
            {reviewText.length > 278 && !isFullReview ? (
              <button onClick={this.showFullReview} type="button">
                Read more
              </button>
            ) : null}
          </h3>
        </div>
      </div>
    );
  }
}

export default Review;

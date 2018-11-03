import React, {Component} from 'react';
import Moment from 'moment';

class Review extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFullReview: false,
    };

    this.showFullReview = this.showFullReview.bind(this);
    this.getHighlightedText = this.getHighlightedText.bind(this);
  }

  showFullReview() {
    this.setState({isFullReview: true});
  }

  getReview() {
    const {reviewText = ''} = this.props;
    const {isFullReview} = this.state;

    if (this.props.getReviewState() === 'NormalReviews') {
      return (
        <p>
          {reviewText.length > 278 && !isFullReview
            ? `${reviewText
                .split('')
                .slice(0, 278)
                .join('')}...`
            : reviewText}
          {reviewText.length > 278 && !isFullReview ? (
            <button
              onClick={this.showFullReview}
              type="button"
              className="read-more-button"
            >
              Read more
            </button>
          ) : null}
        </p>
      );
    } else {
      return this.getHighlightedText(reviewText, this.props.searchTerm);
    }
  }

  getHighlightedText(text, higlight) {
    // Split on higlight term and include term into parts, ignore case
    let parts = text.split(new RegExp(`(${higlight})`, 'gi'));
    return (
      <span>
        {' '}
        {parts.map((part, i) => (
          <span
            key={i}
            style={
              part.toLowerCase() === higlight.toLowerCase()
                ? {fontWeight: '900', fontSize: '1.15em'}
                : {}
            }
          >
            {part}
          </span>
        ))}{' '}
      </span>
    );
  }

  render() {
    const {username, postDate, avatarURL, reviewText = ''} = this.props;
    const {isFullReview} = this.state;
    return (
      <div className="review-class">
        <br />
        <img
          className="review-avatar-image"
          src={avatarURL}
          height="48"
          width="48"
          data-testid="avatar-container"
        />
        <div data-testid="username-container" className="review-info">
          <h3>{username}</h3>
          <p className="review-createdAt" data-testid="createdAt-container">
            {Moment(postDate).format('MMMM YYYY')}
          </p>
        </div>
        <div data-testid="review-text-container" className="review-font">
          <h3>{this.getReview()}</h3>
        </div>
      </div>
    );
  }
}

export default Review;

import React, {Component} from 'react';
import Review from './Modular/Review';

class ReviewFeed extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {reviews} = this.props;
    return (
      <div data-testid="review-feed-container">
        {reviews.map(review => {
          return (
            <Review
              key={review.reviewID}
              username={review.username}
              postDate={review.createdAt}
              reviewText={review.reviewText}
              avatarURL={review.avatarUrl}
            />
          );
        })}
      </div>
    );
  }
}

export default ReviewFeed;

import React from 'react';

const ReviewCount = props => (
  <React.Fragment>
    <h1 className="review-count">{props.reviewCount} Reviews</h1>
  </React.Fragment>
);

export default ReviewCount;

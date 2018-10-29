import React from 'react';

const ReviewCount = props => (
  <div>
    <h1>Review Count</h1>
    <h1 className="review-count">{props.reviewCount} Reviews</h1>
  </div>
);

export default ReviewCount;

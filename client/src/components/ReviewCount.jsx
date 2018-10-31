import React from 'react';
import Stars from '../components/Modular/Stars/Stars';

const tempStyle = {
  display: 'inline-block',
  padding: '0 0.8em 0 0',
};

const ReviewCount = ({reviewCount, rating}) => (
  <React.Fragment>
    <h1 className="review-count" style={tempStyle}>
      {reviewCount} Reviews
    </h1>
    <Stars count={rating} />
  </React.Fragment>
);

export default ReviewCount;

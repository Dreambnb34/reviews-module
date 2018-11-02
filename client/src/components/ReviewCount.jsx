import React from 'react';
import Stars from '../components/Modular/Stars/Stars';

const tempStyle = {
  display: 'inline-block',
  padding: '0 0.8em 0 0',
  border: 'none',
};

const ReviewCount = ({reviewCount, totalAverage}) => (
  <React.Fragment>
    <div className="review-count">
      <h1 style={tempStyle}>{reviewCount} Reviews</h1>
      <Stars count={totalAverage} />
    </div>
  </React.Fragment>
);

export default ReviewCount;

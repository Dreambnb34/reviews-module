import React from 'react';
import Stars from './Stars/Stars';

const tempStyle = {
  display: 'inline-block',
  padding: '0 0.8em 0 0',
};

const Ratings = ({label = 'test', rating = 3.5}) => (
  <div data-testid="ratings-container">
    <span style={tempStyle}>{label}</span>
    <Stars count={rating} />
  </div>
);

export default Ratings;

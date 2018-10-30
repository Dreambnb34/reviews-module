import React from 'react';
import Stars from './Stars/Stars';

const Ratings = ({label = 'test', rating = 3.5}) => (
  <div data-testid="ratings-container">
    <span>{label}</span>
    <Stars count={rating} />
  </div>
);

export default Ratings;

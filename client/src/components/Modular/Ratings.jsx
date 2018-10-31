import React from 'react';
import Stars from './Stars/Stars';

const labelStyle = {
  display: 'inline-block',
  width: '10em',
};

const starStyle = {
  display: 'inline-block',
  padding: '100px',
};

const containerStyle = {
  // display: 'inline-block',
  // width: '10em',
};

const Ratings = ({label = 'test', rating = 3.5}) => (
  <div data-testid="ratings-container">
    <span style={labelStyle}>{label}</span>
    <Stars style={starStyle} count={rating} />
  </div>
);

export default Ratings;

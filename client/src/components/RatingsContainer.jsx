import React from 'react';
import Ratings from './Modular/Ratings';

const containerStyle = {
  display: 'inline-block',
  width: '10em',
};

const RatingsContainer = ({payload}) => (
  <React.Fragment>
    <div className="ratings-container">
      {payload.map((obj, index) => {
        return (
          <div key={index} className={`individual-ratings-div-${index}`}>
            <h1 />
            <Ratings label={obj.label} rating={obj.rating} />
          </div>
        );
      })}
    </div>
  </React.Fragment>
);

export default RatingsContainer;

import React from 'react';
import {getEmptyStar, getFullStar, getHalfStar} from './StarsObjects';
import {roundHalf, returnArrStars} from './StarsLib';

const Stars = ({count}) => (
  <React.Fragment>
    <span>
      {returnArrStars(roundHalf(count)).map((c, index) => {
        if (c === 1) {
          return getFullStar(index);
        } else if (c === 0.5) {
          return getHalfStar(index);
        } else {
          return getEmptyStar(index);
        }
      })}
    </span>
  </React.Fragment>
);

export default Stars;

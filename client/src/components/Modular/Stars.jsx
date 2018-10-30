import React from 'react';

/*
span w/ inner SVG's
path determining stars¢
*/

const fullStarStyle = {
  height: '1em',
  width: '1em',
  display: 'block',
  fill: 'green',
};

const halfStarStyle = {
  height: '1em',
  width: '1em',
  display: 'block',
  fill: 'green',
  position: 'absolute',
};

const emptyStarStyle = {
  height: '1em',
  width: '1em',
  display: 'block',
  fill: 'grey',
};

const wrap = {
  display: 'inline-block',
  padding: '0 0.3em 0 0',
  float: 'none',
};

const getFullStar = () => (
  <div style={wrap}>
    <span data-testid="full-star">
      <svg
        viewBox="0 0 1000 1000"
        role="presentation"
        aria-hidden="true"
        focusable="false"
        style={fullStarStyle}
      >
        <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z" />
      </svg>
    </span>
  </div>
);

const getHalfStar = () => (
  <div style={wrap}>
    <span data-testid="half-star">
      <span>
        <svg
          viewBox="0 0 1000 1000"
          role="presentation"
          aria-hidden="true"
          focusable="false"
          style={halfStarStyle}
        >
          <path d="M510.2 23.3l1 767.3-226.1 172.2c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L58 447.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7.1-23.1 28.1-39.1 52.1-39.1z" />
        </svg>
      </span>
      <span>
        <svg
          viewBox="0 0 1000 1000"
          role="presentation"
          aria-hidden="true"
          focusable="false"
          style={emptyStarStyle}
        >
          <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z" />
        </svg>
      </span>
    </span>
  </div>
);

const getEmptyStar = () => (
  <div style={wrap}>
    <span data-testid="empty-star">
      <svg
        viewBox="0 0 1000 1000"
        role="presentation"
        aria-hidden="true"
        focusable="false"
        style={emptyStarStyle}
      >
        <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z" />
      </svg>
    </span>
  </div>
);

const roundHalf = count => {
  return Math.round(count * 2) / 2;
};

const returnArrStars = count => {
  let copyCount = count;
  let arr = [];
  for (let i = 0; i < 5; i++) {
    if (copyCount <= 0) {
      arr.push(0);
      copyCount--;
    } else if (copyCount >= 0.5 && copyCount < 1) {
      arr.push(0.5);
      copyCount--;
    } else {
      arr.push(1);
      copyCount--;
    }
  }
  //   arr.sort();
  console.log('Arr Length: ', arr.length);
  return arr;
};

const Stars = ({count}) => (
  <React.Fragment>
    <span>
      {returnArrStars(roundHalf(count)).map(c => {
        if (c === 1) {
          return getFullStar();
        } else if (c === 0.5) {
          return getHalfStar();
        } else {
          return getEmptyStar();
        }
      })}
    </span>
  </React.Fragment>
);

export default Stars;

export const roundHalf = count => {
  return Math.round(count * 2) / 2;
};

export const returnArrStars = count => {
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
  return arr;
};

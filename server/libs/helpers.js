module.exports.getAverageRatings = ratingsObjArr => {
  let retObj = {
    accuracyRating: 0,
    communicationRating: 0,
    cleanlinessRating: 0,
    locationRating: 0,
    check_In_Rating: 0,
    valueRating: 0,
  };

  return ratingsObjArr.reduce((mainObj, obj, index, array) => {
    if (index === array.length - 1) {
      for (key in mainObj) {
        mainObj[key] += obj[key];
      }

      // initialize a totalAverage count in our mainObj
      let totalAverage = 0;

      for (key in mainObj) {
        mainObj[key] = mainObj[key] / array.length;
        mainObj[key] = +mainObj[key].toFixed(1);
        totalAverage += mainObj[key];
      }
      // we divide by 6 to get our total average of all ratings
      mainObj.totalAverage = +(totalAverage / 6).toFixed(1);
      return mainObj;
    } else {
      for (key in mainObj) {
        mainObj[key] += obj[key];
      }
      return mainObj;
    }
  }, retObj);
};

module.exports.getPageNumberCount = totalReviewCount => {
  return Math.ceil(totalReviewCount / 7); // 7 is the maximum amount of reviews per page
};

module.exports.getReviewObjects = (
  reviewArray,
  currentPageNumber,
  totalPageCount,
) => {
  let sliceArr = [];
  // calculate needed indices from pageNumber given
  if (currentPageNumber === totalPageCount) {
    sliceArr[0] = (currentPageNumber - 1) * 7;
    // we want the last review
    sliceArr[1] = totalPageCount.length;
  } else {
    sliceArr[1] = 7 * currentPageNumber;
    sliceArr[0] = sliceArr[1] - 7;
  }

  // sort reviews by when it was created
  reviewArray.sort((a, b) => {
    return new Date(b.createdAt) - new Date(a.createdAt);
  });

  // create a new array with the specific indices from the array we just sorted
  let reviews = reviewArray.slice(sliceArr[0], sliceArr[1]);

  return reviews.map(
    ({id, reviewText, responseText, avatarUrl, username, createdAt}) => {
      return {
        id,
        reviewText,
        responseText,
        avatarUrl,
        username,
        createdAt,
      };
    },
  );
};

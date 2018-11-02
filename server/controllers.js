const {
  getAverageRatings,
  getPageNumberCount,
  getReviewObjects,
} = require('./libs/helpers');

const knex = require('knex')({
  client: 'pg',
  connection: 'postgres://localhost/fec',
});

const controller = {
  getReviewsByIdSearch: (id, page, term) => {
    // this will assume we have a valid term
    const reviews = knex('reviews')
      .join('users', 'userId', '=', 'users.id')
      .select(
        'reviews.id',
        'users.avatarUrl',
        'users.username',
        'reviews.reviewText',
        'reviews.responseText',
        'reviews.flagged',
        'reviews.createdAt',
      )
      .where({
        listingsId: id,
      })
      .andWhere('reviewText', 'like', `%${term}%`);

    return reviews.then(reviewArr => {
      let retObj = {};
      let reviewCount = reviewArr.length;
      retObj.pageNumberCount = getPageNumberCount(reviewCount);
      retObj.reviews = getReviewObjects(
        reviewArr,
        page,
        retObj.pageNumberCount,
      );
      retObj.searchReviewCount = reviewCount;
      return retObj;
    });
  },

  getReviewsById: (id, page) => {
    const reviews = knex('reviews')
      .join('users', 'userId', '=', 'users.id')
      .select(
        'reviews.id',
        'users.avatarUrl',
        'users.username',
        'reviews.reviewText',
        'reviews.responseText',
        'reviews.flagged',
        'reviews.createdAt',
        'reviews.accuracyRating',
        'reviews.communicationRating',
        'reviews.cleanlinessRating',
        'reviews.locationRating',
        'reviews.check_In_Rating',
        'reviews.valueRating',
      )
      .where({
        listingsId: id,
      });

    return reviews.then(reviewArr => {
      let retObj = getAverageRatings(reviewArr);
      let reviewCount = reviewArr.length;
      retObj.pageNumberCount = getPageNumberCount(reviewCount);
      retObj.reviews = getReviewObjects(
        reviewArr,
        page,
        retObj.pageNumberCount,
      );
      retObj.reviewCount = reviewCount;
      return retObj;
    });
  },
};

module.exports = controller;

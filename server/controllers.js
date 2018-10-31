// const {transaction} = require('objection');
// const User = require('./models/users');

const knex = require('knex')({
  client: 'pg',
  connection: 'postgres://localhost/fec',
});

const controller = {
  getReviewsById: id => {
    // const user = knex('reviews')
    //   .where({
    //     listingsId: 638,
    //   })
    //   .select('*');

    const reviews = knex('reviews')
      .join('users', 'userId', '=', 'users.id')
      .select(
        'users.id',
        'users.avatarUrl',
        'users.username',
        'reviews.id',
        'reviews.reviewText',
        'reviews.responseText',
        'reviews.flagged',
        'reviews.createdAt',
        'reviews.accuracyRating',
        'reviews.communicationRating',
        'reviews.cleanlinessRating',
        'locationRating',
        'check_In_Rating',
        'valueRating',
      )
      .where({
        listingsId: id,
      });

    reviews.then(x => {
      console.log(x);
    });
  },
};

module.exports = controller;

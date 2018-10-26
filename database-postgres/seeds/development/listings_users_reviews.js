const listingsData = require('../../../faker/json/listings/listings');
const usersData = require('../../../faker/json/users/users');
const reviewsData = require('../../../faker/json/reviews/reviews');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('listings').del()
    .then(function () {
      return knex('reviews').del();
    })
    .then(() => {
      return knex('users').del();
    })
    .then(() => {
      // let's create first listings
      // create our promise container
      let listingPromises = [];
      listingsData.forEach(listing => {
        listingPromises.push(createListing(knex, listing)); 
      });
      return Promise.all(listingPromises);
    })
    .then(() => {
      // create users
      // create promise container
      let usersPromises = [];
      usersData.forEach(user => {
        usersPromises.push(createUsers(knex, user));
      });
      return Promise.all(usersPromises);
    })
    .then(() => {
      // let's grab our listings id
      return knex.select('id').from('listings');
    })
    .then((listings) => {
      return listings;
    })
    .then((listings) => {
      let promiseArr = [];
      promiseArr.push(listings);
      promiseArr.push(knex.select('id').from('users'));
      return Promise.all(promiseArr);
    })
    .then((promiseArr) => {
      let listings = promiseArr[0];
      let users = promiseArr[1];

      let maxListings = listings.length - 1;
      let maxUsers = users.length - 1;

      let promiseReviews = [];
      reviewsData.forEach(review => {
        let reviewCopy = review;
        reviewCopy.listingsId = listings[getRandomInt(0, maxListings)].id;
        reviewCopy.userId = users[getRandomInt(0, maxUsers)].id;
        promiseReviews.push(createReviews(knex, reviewCopy));
      });
      return Promise.all(promiseReviews);
    })
};

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const createListing = (knex, listings) => {
  return knex('listings').insert({
    lat: listings.lat,
    long: listings.long,
    neighborhoodDescription: listings.neighborhoodDescription,
    gettingAroundDescription: listings.gettingAroundDescription
  });
}

const createUsers = (knex, user) => {
  return knex('users').insert({
    username: user.username,
    avatarUrl: user.avatarUrl
  });
};

const createReviews = (knex, review) => {
  return knex('reviews').insert({
    reviewText: review.reviewText,
    responseText: review.responseText,
    createdAt: review.createdAt,
    accuracyRating: review.accuracyRating,
		communicationRating: review.communicationRating,
		cleanlinessRating: review.cleanlinessRating,
		locationRating: review.locationRating,
		check_In_Rating: review.check_In_Rating,
    valueRating: review.valueRating,
    userId: review.userId,
    listingsId: review.listingsId
  }); 
};
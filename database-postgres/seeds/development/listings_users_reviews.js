const listingsData = require('../../../faker/json/listings/listings');
const usersData = require('../../../faker/json/users/users');

// .createTable('listings', table => {
//     table.increments('id').primary();
//     table.decimal('lat');
//     table.decimal('long');
//     table.text('neighborhoodDescription');
//     table.text('gettingAroundDescription');
// })

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('listings').del()
    .then(function () {
      // Inserts seed entries
      let listingPromises = [];
      listingsData.forEach(listing => {
        listingPromises.push(createListing(knex, listing));
      });
      return Promise.all(listingPromises);
    });
};

const createListing = (knex, listings) => {
  return knex('listings').insert({
    lat: listings.lat,
    long: listings.long,
    neighborhoodDescription: listings.neighborhoodDescription,
    gettingAroundDescription: listings.gettingAroundDescription
  });
}
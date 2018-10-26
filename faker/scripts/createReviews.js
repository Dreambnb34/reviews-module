// .createTable('reviews', table => {
//     table.increments('id').primary();
//     table
//       .integer('userId')
//       .unsigned()
//       .references('id')
//       .inTable('users')
//       .onDelete('SET NULL');
//     table
//       .integer('listingsId')
//       .unsigned()
//       .references('id')
//       .inTable('listings')
//       .onDelete('SET NULL');
//     table.text('reviewText');
//     table.text('responseText');
//     table.boolean('flagged')
//       .defaultTo(false);
//     table.date('createdAt');
//     table.integer('accuracyRating');
//     table.integer('communicationRating');
//     table.integer('cleanlinessRating');
//     table.integer('locationRating');
//     table.integer('check_In_Rating');
//     table.integer('valueRating');
// });

const faker = require('faker');
const fs = require('fs');
const path = require('path');
const AWS = require('aws-sdk');

let fakerData = [];

const makeReviewText = (num) => {
    if (num < 25) {
        return faker.fake("{{lorem.paragraph}}");
    } else if (num < 50) {
        return faker.fake("{{lorem.paragraph}}{{lorem.paragraph}}");
    } else if (num < 75) {
        return faker.fake("{{lorem.paragraphs}}");
    } else {
        return faker.fake("{{lorem.paragraph}}{{lorem.paragraph}}{{lorem.paragraph}}"); 
    }
};

const makeResponseText = (num) => {
    if (num <= 75) {
        return '';
    } else if (num <= 90) {
        return faker.fake("{{lorem.paragraph}}");
    } else {
        return faker.fake("{{lorem.paragraphs}}");
    }
};

const makeRandomDate = (num) => {
    let date = '';
    if (num < 50) {
        date = new Date(faker.fake("{{date.past}}"));
    } else {
        date = new Date(faker.fake("{{date.recent}}"));
    }
    return date;
};

const getRandInt = (max) => {
    return Math.random() * Math.floor(max);
};

const getRandomRating = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
};

for (let i = 0; i < 1500; i++) {
    let data = {};
    let rand = getRandInt(100);
    data.reviewText = makeReviewText(rand);
    rand = getRandInt(100);
    data.responseText = makeResponseText(rand);
    rand = getRandInt(100);
    data.createdAt = makeRandomDate(rand);
    data.accuracyRating = getRandomRating(1, 5);
    data.communicationRating = getRandomRating(1, 5);
    data.cleanlinessRating = getRandomRating(1, 5);
    data.locationRating = getRandomRating(1, 5);
    data.check_In_Rating = getRandomRating(1, 5);
    data.valueRating = getRandomRating(1, 5);

    fakerData.push(data);
}

fs.writeFile(path.join(__dirname + '/../json/reviews/reviews.js'), JSON.stringify(fakerData, null, '\t'), (err) => {
    if (err) {
        throw err;
    } else {
        console.log('Reviews Out!');
    }
})


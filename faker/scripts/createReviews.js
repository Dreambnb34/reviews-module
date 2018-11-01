const faker = require('faker');
const fs = require('fs');
const path = require('path');

let fakerData = [];

const makeReviewText = num => {
  if (num < 25) {
    return faker.fake('{{lorem.paragraph}}');
  } else if (num < 50) {
    return faker.fake('{{lorem.paragraph}}{{lorem.paragraph}}');
  } else if (num < 75) {
    return faker.fake('{{lorem.paragraphs}}');
  } else {
    return faker.fake(
      '{{lorem.paragraph}}{{lorem.paragraph}}{{lorem.paragraph}}',
    );
  }
};

const makeResponseText = num => {
  if (num <= 75) {
    return '';
  } else if (num <= 90) {
    return faker.fake('{{lorem.paragraph}}');
  } else {
    return faker.fake('{{lorem.paragraphs}}');
  }
};

const makeRandomDate = num => {
  let date = '';
  if (num < 50) {
    date = new Date(faker.fake('{{date.past}}'));
  } else {
    date = new Date(faker.fake('{{date.recent}}'));
  }
  return date;
};

const getRandInt = max => {
  return Math.random() * Math.floor(max);
};

const getRandomRating = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
};

const getRating = () => {
  switch (getRandomRating(1, 9)) {
    case 0:
      return 1;
      break;
    case 1:
      return getRandomRating(3, 4);
      break;
    case 2:
      return 4;
      break;
    case 3:
      return getRandomRating(1, 5);
      break;
    case 4:
      return getRating();
      break;
    case 5:
      return getRandomRating(3, 5);
      break;
    case 6:
      return getRandomRating(2, 3);
      break;
    case 7:
      return 5;
      break;
    case 8:
      return getRandomRating(3, 5);
      break;
    default:
      return getRandomRating(4, 5);
      break;
  }
};

for (let i = 0; i < 20000; i++) {
  let data = {};
  let rand = getRandInt(100);
  data.reviewText = makeReviewText(rand);
  rand = getRandInt(100);
  data.responseText = makeResponseText(rand);
  rand = getRandInt(100);
  data.createdAt = makeRandomDate(rand);
  data.accuracyRating = getRating();
  data.communicationRating = getRating();
  data.cleanlinessRating = getRating();
  data.locationRating = getRating();
  data.check_In_Rating = getRating();
  data.valueRating = getRating();

  fakerData.push(data);
}

fs.writeFile(
  path.join(__dirname + '/../json/reviews/reviews.js'),
  JSON.stringify(fakerData, null, '\t'),
  err => {
    if (err) {
      throw err;
    } else {
      console.log('Reviews Out!');
    }
  },
);

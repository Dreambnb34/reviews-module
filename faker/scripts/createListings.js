// .createTable('listings', table => {
//     table.increments('id').primary();
//     table.decimal('lat');
//     table.decimal('long');
//     table.text('neighborhoodDescription');
//     table.text('gettingAroundDescription');
// })

const faker = require('faker');
const fs = require('fs');
const path = require('path');

let ourFaker = [];

for (let i = 0; i < 100; i++) {
    let data = {};
    data.lat = faker.fake("{{address.latitude}}");
    data.long = faker.fake("{{address.longitude}}");

    let rand = getRandomInt(100);

    if (rand <= 50) {
        data.neighborhoodDescription = faker.fake("{{lorem.paragraph}}");
        data.gettingAroundDescription = faker.fake("{{lorem.paragraph}}");
    } else if (rand <= 75) {
        data.neighborhoodDescription = faker.fake("{{lorem.paragraph}}{{lorem.paragraph}}");
        data.gettingAroundDescription = faker.fake("{{lorem.paragraph}}");
    } else {
        data.neighborhoodDescription = faker.fake("{{lorem.paragraph}}{{lorem.paragraph}}{{lorem.paragraph}}");
        data.gettingAroundDescription = faker.fake("{{lorem.paragraph}}{{lorem.paragraph}}");
    }
    ourFaker.push(data);
}

fs.writeFile(path.join(__dirname + '/../json/listings/listings.js'), JSON.stringify(ourFaker, null, '\t'), (err) => {
    if (err) {
        throw err;
    }
    console.log(`It's Good!!`);
})

function getRandomInt(x) {
    return Math.random() * Math.floor(x);
}



exports.up = knex => {
    return knex.schema
    .createTable('users', table => {
        table.increments('id').primary();
        table.string('avatarUrl');
        table.string('username');
      })
    .createTable('listings', table => {
        table.increments('id').primary();
        table.specificType('coordinates', 'POINT');
        table
          .integer('reviewCount')
          .unsigned();
        table.text('neighborhoodDescription');
        table.text('gettingAroundDescription');
    })
    .createTable('reviews', table => {
        table.increments('id').primary();
        table
          .integer('userId')
          .unsigned()
          .references('id')
          .inTable('users')
          .onDelete('SET NULL');
        table
          .integer('listingsId')
          .unsigned()
          .references('id')
          .inTable('listings')
          .onDelete('SET NULL');
        table.text('reviewText');
        table.text('responseText');
        table.boolean('flagged')
          .defaultTo(false);
        table.date('createdAt');
        table.integer('accuracyRating');
        table.integer('communicationRating');
        table.integer('cleanlinessRating');
        table.integer('locationRating');
        table.integer('check_In_Rating');
        table.integer('valueRating');
    });
};

exports.down = knex => {
    return knex.schema
      .dropTableIfExists('users')
      .dropTableIfExists('listings')
      .dropTableIfExists('reviews');
}
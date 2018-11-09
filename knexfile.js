// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    // connection: {
    //   host:
    //     'postgres://zqpuputn:wGOxL4udKVe8YCRehoDJiQf8qKKYQOvE@pellefant.db.elephantsql.com:5432/zqpuputn',
    //   database: ,
    //   user: '',
    //   password: 'wGOxL4udKVe8YCRehoDJiQf8qKKYQOvE',
    // },
    database: 'zqpuputn',
    password: 'wGOxL4udKVe8YCRehoDJiQf8qKKYQOvE',
    connection:
      'postgres://zqpuputn:wGOxL4udKVe8YCRehoDJiQf8qKKYQOvE@pellefant.db.elephantsql.com:5432/zqpuputn',
    user: '',
    migrations: {
      directory: __dirname + '/database-postgres/schemas',
    },
    seeds: {
      directory: __dirname + '/database-postgres/seeds/development',
    },
    pool: {
      min: 0,
      max: 3,
    },
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },
};

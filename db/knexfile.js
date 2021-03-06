// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      host     : 'localhost',
      database : 'promt_development',
      charset  : 'utf8'
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './db/migrations'
    },
    pool: {
      min: 2,
      max: 10
    },
    seeds: {
      directory: './seeds/dev'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};

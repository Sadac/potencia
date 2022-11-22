import type { Knex } from 'knex'
import * as dotenv from 'dotenv'
dotenv.config({ path: './../../.env' })

const {
  DB_CLIENT,
  DB_USER,
  DB_PASSWORD,
  DB_NAME,
  DB_DEV_MIN_POOL,
  DB_DEV_MAX_POOL,
} = process.env

const knexfile: { [key: string]: Knex.Config } = {
  development: {
    client: DB_CLIENT,
    connection: {
      database: DB_NAME,
      user: DB_USER,
      password: DB_PASSWORD,
    },
    pool: {
      min: parseInt(DB_DEV_MIN_POOL),
      max: parseInt(DB_DEV_MAX_POOL),
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },

  // staging: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user: 'username',
  //     password: 'password',
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10,
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations',
  //   },
  // },

  // production: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user: 'username',
  //     password: 'password',
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10,
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations',
  //   },
  // },
}

export default knexfile

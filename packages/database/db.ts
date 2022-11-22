import knex from 'knex'
import knexfile from './knexfile'

// TODO: In prod, use dependency injection
// to create knex instance so db access can be mocked
// for tests

// TODO: In prod don't access knexfile.development directly
// but decide with env vars which config to use
const db = knex(knexfile.development)

export default db

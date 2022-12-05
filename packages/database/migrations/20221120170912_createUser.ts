import * as dotenv from 'dotenv'
dotenv.config({ path: './../.env' })
import { Knex } from 'knex'

const USERS_TABLE = process.env.USERS_TABLE!

export async function up(knex: Knex): Promise<void> {
  await knex.raw('create extension if not exists "uuid-ossp"')

  await knex.schema.createTable(USERS_TABLE, (table) => {
    table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'))
    table.string('email').notNullable().unique()
    table.string('password').notNullable()
    table.string('firstName')
    table.string('lastName')
    table.dateTime('dateOfBirth')
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable(USERS_TABLE)

  await knex.raw('drop extension if exists "uuid-ossp"')
}

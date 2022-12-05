import * as dotenv from 'dotenv'
dotenv.config({ path: './../../.env' })
const { USERS_TABLE } = process.env

import { UserDto } from './types'
import db from '../../../database/db'

class User {
  async createUser(userDto: UserDto) {
    const { firstName, lastName, email, password, dateOfBirth } = userDto
    const [result] = await db(USERS_TABLE)
      .insert({
        firstName,
        lastName,
        email,
        password,
        dateOfBirth,
      })
      .returning('id')

    return result
  }

  async getUser(id: string) {
    const [user] = await db(USERS_TABLE).where({ id })
    return user
  }
}

export default new User()

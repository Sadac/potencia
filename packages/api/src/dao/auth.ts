import * as dotenv from 'dotenv'
dotenv.config({ path: './../../.env' })
const { USERS_TABLE } = process.env

import { AuthData } from './types'
import db from '../../../database/db'

class Auth {
  async login(authDto: AuthData) {
    const { email, password } = authDto
    const [result] = await db(USERS_TABLE).where({ email })
    console.log(result)

    return result
  }
}

export default new Auth()

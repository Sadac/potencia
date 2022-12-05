import authDao from '../dao/auth'
import { AuthData } from './../dao/types'

class AuthService {
  static async login(authDto: AuthData) {
    return authDao.login(authDto)
  }
}

export default AuthService

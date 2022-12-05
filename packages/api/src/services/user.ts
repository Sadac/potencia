import userDao from '../dao/users'
import { UserDto } from './../dao/types'

class UserService {
  static async createUser(userDto: UserDto) {
    const user = userDao.createUser(userDto)
    console.log(user)

    return user
  }

  static async getUser(id: string) {
    return userDao.getUser(id)
  }
}

export default UserService

import userDao from './../dao/user'
import { UserData } from '../database/interfaces/User'

class UserService {
  createUser(userDto: UserData) {
    return userDao.createUser(userDto)
  }

  getUser(id: string) {
    return userDao.getUser(id)
  }
}

export default new UserService()

import userDao from '../dao/user'

class UserService {
  // @ts-ignore
  static async createUser(userDto) {
    return userDao.createUser(userDto)
  }

  static async getUser(id: string) {
    return userDao.getUser(id)
  }
}

export default UserService

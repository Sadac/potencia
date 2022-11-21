import userService from './../service/user'

class UserController {
  async createUser(req: any, res: any) {
    try {
      const id = await userService.createUser(req.body)
      res.status(201).send(id)
    } catch (error) {
      console.log(error)
    }
  }

  async getUser(req: any, res: any) {
    try {
      const user = await userService.getUser(req.params.id)
      res.status(201).send(user)
    } catch (error) {
      console.log(error)
    }
  }
}

export default new UserController()

import { Request, Response } from 'express'
import userService from '../services/user'

class UserController {
  static async createUser(req: Request, res: Response) {
    try {
      const userData = req.body

      const id = await userService.createUser(userData)

      res.status(201).send(id)
    } catch (error) {
      console.log(error)
    }
  }

  static async getUser(req: Request, res: Response) {
    try {
      const userId = req.params.id

      const user = await userService.getUser(userId)

      res.status(201).send(user)
    } catch (error) {
      console.log(error)
    }
  }
}

export default UserController

import { Request, Response } from 'express'
import authService from '../services/auth'

class AuthController {
  static async login(req: Request, res: Response) {
    try {
      const authData = req.body

      const token = await authService.login(authData)

      res.status(201).send(token)
    } catch (error) {
      console.log(error)
    }
  }
}

export default AuthController

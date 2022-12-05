import express from 'express'
const authRouter = express.Router()

import AuthController from '../controller/auth'
const { login } = AuthController

authRouter.post('/', login)

export default authRouter

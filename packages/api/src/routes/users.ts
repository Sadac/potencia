import express from 'express'
const usersRouter = express.Router()

import UserController from '../controller/user'
const { createUser, getUser } = UserController

usersRouter.post('/user', createUser)
usersRouter.get('/user/:id', getUser)

export default usersRouter

import express from 'express'
const usersRouter = express.Router()

import UserController from '../controller/users'
const { createUser, getUser } = UserController

usersRouter.post('/', createUser)
usersRouter.get('/:id', getUser)

export default usersRouter

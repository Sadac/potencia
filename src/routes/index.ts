import express from 'express'
import userController from './../controller/user'

const router = express.Router()

router.post('/user', userController.createUser)
router.get('/user/:id', userController.getUser)

export default router

import * as dotenv from 'dotenv'
dotenv.config()

import express, { Application } from 'express'
import bodyParser from 'body-parser'
const app: Application = express()

import usersRouter from './routes/users'

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(usersRouter)

const SERVER_PORT = process.env.SERVER_PORT
app.listen(SERVER_PORT, () => {
  console.log(`server is running on PORT ${SERVER_PORT}`)
})

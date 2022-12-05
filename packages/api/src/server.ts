import express, { Application } from 'express'
import bodyParser from 'body-parser'
const app: Application = express()
import * as dotenv from 'dotenv'
dotenv.config()

import usersRouter from './routes/users'
import authRouter from './routes/auth'

const { SERVER_PORT, API_BASE_URL, API_USERS_URL, API_AUTH_URL } = process.env

function startServer() {
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(bodyParser.json())

  app.use(`${API_BASE_URL}${API_USERS_URL}`, usersRouter)
  app.use(`${API_BASE_URL}${API_AUTH_URL}`, authRouter)

  return new Promise((resolve) => {
    const server = app.listen(SERVER_PORT, () => {
      console.log(`server is running on PORT ${SERVER_PORT}`)
    })

    resolve(server)
  })
}

export default startServer

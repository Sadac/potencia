import * as dotenv from 'dotenv'
dotenv.config()

import express, { Application, Request, Response } from 'express'
import bodyParser from 'body-parser'
const app: Application = express()

import router from './routes'

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(router)

app.get('/', (req: Request, res: Response) => {
  res.send('Node App is Running')
})

const SERVER_PORT = process.env.SERVER_PORT
app.listen(SERVER_PORT, () => {
  console.log(`server is running on PORT ${SERVER_PORT}`)
})

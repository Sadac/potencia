import UserService from '../../services/user'
const { createUser } = UserService
import startServer from '../../server'

let baseURL = ''
let server: any

beforeAll(async () => {
  server = await startServer()
  baseURL = `http://localhost:5000/api/users`
})

describe('user service', () => {
  it('creates an user', async () => {
    server

    await createUser({
      firstName: 'Rocco',
      email: 'rocco@mail.com',
      password: 'qwerty',
    })
  })

  expect(res)
})

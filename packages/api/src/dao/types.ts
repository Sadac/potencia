export type UserDto = {
  firstName: string
  lastName?: string
  email: string
  password: string
  dateOfBirth?: string
}

export type UserDataWithId = {
  id: string
} & UserDto

export type AuthData = {
  email: string
  password: string
}

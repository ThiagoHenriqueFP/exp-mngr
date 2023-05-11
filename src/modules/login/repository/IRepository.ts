import { User } from '@prisma/client'

export interface ILogin {
  username: string,
  password: string
}

export interface IRepository {
  login(login: ILogin)
}

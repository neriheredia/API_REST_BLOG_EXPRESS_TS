import UserModel from '../models/nosql/User'
import { UserAuth } from '../interfaces'

const registerService = (user:UserAuth) => new UserModel(user)

const loginService = async (email: string) => await UserModel.findOne({ email })

export { loginService, registerService }

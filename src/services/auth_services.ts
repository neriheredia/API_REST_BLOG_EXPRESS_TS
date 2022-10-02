import UserModel from '../models/nosql/User'
import { UserProp } from '../interfaces'

const registerService = (user:UserProp) => new UserModel(user)

const loginService = async (email: string) => await UserModel.findOne({ email })

export { loginService, registerService }

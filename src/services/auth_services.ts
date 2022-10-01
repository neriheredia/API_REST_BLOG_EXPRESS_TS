import UserModel from '../models/nosql/User'
import { UserAuth } from '../interfaces'

const registerNewUser = async (user:UserAuth) => await new UserModel(user)

export { registerNewUser }

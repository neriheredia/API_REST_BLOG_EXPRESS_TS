import { Request, Response } from 'express'
import { registerNewUser } from '../services'
import { createAvatarDefault, encryptPassword, handleHttpRes, handleHttpError } from '../utils'

const registerUser = async (req: Request, res: Response) => {
  const avatarDefault = createAvatarDefault(req.body.firstName, req.body.lastName)
  const userData = {
    avatar: avatarDefault,
    email: req.body.email,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    password: encryptPassword(req.body.password)
  }
  try {
    const newUser = await registerNewUser(userData)
    const savedUser = await newUser.save()
    handleHttpRes(res, 201, 'User created', savedUser)
  } catch (error) {
    handleHttpError(res, 500, 'Error creating user', error)
  }
}

export { registerUser }

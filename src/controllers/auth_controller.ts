import { Request, Response } from 'express'
import { loginService, registerService } from '../services'
import { createAvatarDefault, decryptPassword, encryptPassword, handleHttpRes, handleHttpError } from '../utils'

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
    const newUser = registerService(userData)
    const savedUser = await newUser.save()
    handleHttpRes(res, 201, 'User created', savedUser)
  } catch (error) {
    handleHttpError(res, 500, 'Error creating user', error)
  }
}

const loginUser = async (req: Request, res: Response) => {
  const query = req.body.email
  const password = req.body.password
  try {
    const user = await loginService(query)
    if (user) {
      const descryptedPassword = decryptPassword(user!.password)
      return descryptedPassword !== password ? handleHttpError(res, 500, 'Invalid credentials') : handleHttpRes(res, 201, 'User created', user)
    }
    handleHttpError(res, 500, 'There is no registered user with that email.')
  } catch (error) {
    handleHttpError(res, 500, 'There is no registered user with that email.', error)
  }
}

export { loginUser, registerUser }

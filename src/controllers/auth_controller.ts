import { Request, Response } from 'express';
import { loginService, registerService } from '../services';
import {
  createAvatarDefault,
  crateToken,
  decryptPassword,
  encryptPassword,
  handleHttpRes,
  handleHttpError,
  userAdapter,
  handleHttpResAuth
} from '../utils';

const registerUserController = async (req: Request, res: Response) => {
  const avatarDefault = createAvatarDefault(req.body.firstName, req.body.lastName);

  const userData = {
    avatar: avatarDefault,
    email: req.body.email,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    password: encryptPassword(req.body.password)
  };

  try {
    const newUser = registerService(userData);

    const savedUser = await newUser.save();

    handleHttpRes(res, 201, 'User created', savedUser);
  } catch (error) {
    handleHttpError(res, 500, 'Error creating user', error);
  };
};

const loginUserController = async (req: Request, res: Response) => {
  const query = req.body.email;
  const passwordReq = req.body.password;

  try {
    const user = await loginService(query);

    if (user) {
      const accessToken = crateToken(user);

      const descryptedPassword = decryptPassword(user.password);

      const userData = userAdapter(user);

      return descryptedPassword !== passwordReq
        ? handleHttpError(res, 500, 'Invalid credentials')
        : handleHttpResAuth(res, 200, 'User logged in successfully', userData, accessToken);
    };
  } catch (error) {
    handleHttpError(res, 500, 'There is no registered user with that email.', error);
  };
};

export { loginUserController, registerUserController };

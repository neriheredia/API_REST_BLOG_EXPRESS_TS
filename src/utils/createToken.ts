import { sign } from 'jsonwebtoken';
import { AuthUser } from '../interfaces/user_interface';

export const crateToken = (user:AuthUser) => {
  const secretKey = <string>process.env.JWT_SECRET_KEY;

  const accessToken = sign(
    {
      _id: user._id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      isAdmin: user.isAdmin
    }, secretKey,
    { expiresIn: '7h' }
  );

  return accessToken;
};

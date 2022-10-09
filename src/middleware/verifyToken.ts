import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { PayloadJWT } from '../interfaces';
import { formatterToken, handleHttpErrorRandom } from '../utils';

export const tokenValidation = (req: Request, res: Response, next: NextFunction) => {
  const token: string | undefined = req.header('authorization');
  if (!token) return handleHttpErrorRandom(res, 'Access denied');
  try {
    const formatter = formatterToken(token);

    const payload = formatter && verify(formatter, process.env.JWT_SECRET_KEY || 'TOKEN_TOKEN') as PayloadJWT;

    req.userId = payload && payload._id;

    next();
  } catch (error) {
    handleHttpErrorRandom(res, 'Oops! an unexpected problem.');
  };
};

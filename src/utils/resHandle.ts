import { Response } from 'express';

const handleHttpRes = (res: Response, numberStatus: number, message: string, data?:any) => {
  res.status(numberStatus).json({ status: numberStatus, message, data });
};

const handleHttpResAuth = (res: Response, numberStatus: number, message: string, data?:any, token?:any) => {
  res.header('authorization', `Bearer ${token}`).json({ status: numberStatus, message, data });
};

export { handleHttpRes, handleHttpResAuth };

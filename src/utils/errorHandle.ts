import { Response } from 'express';

const handleHttpError = (res: Response, numberStatus: number, error: string, errorRaw?: any) => {
  console.log(errorRaw);
  res.status(numberStatus).json({ error });
};

const handleHttpErrorRandom = (res: Response, error: string, errorRaw?: any) => {
  console.log(errorRaw);
  res.status(404).json({ error });
};

export { handleHttpError, handleHttpErrorRandom };

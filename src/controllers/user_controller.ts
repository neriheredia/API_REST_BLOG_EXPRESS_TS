import { Request, Response } from 'express';
import { allUserService, deleteAllUserService, deleteUserService, updateUserService } from '../services';
import { handleHttpError, handleHttpRes } from '../utils';

const allUsers = async (req: Request, res: Response) => {
  try {
    const users = await allUserService();

    handleHttpRes(res, 200, 'Successful call', users);
  } catch (error) {
    handleHttpError(res, 500, 'Error, the call failed.');
  };
};

const updateUser = async (req: Request, res: Response) => {
  const id = req.params.id;

  try {
    const newUser = await updateUserService(id, req.body);

    handleHttpRes(res, 200, 'Successful call', newUser);
  } catch (error) {
    handleHttpError(res, 500, 'Error, the call failed.');
  };
};

const deleteUser = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const deletedUser = await deleteUserService(id);

    handleHttpRes(res, 200, 'Successful call', deletedUser);
  } catch (error) {
    handleHttpError(res, 500, 'Error, the call failed.');
  };
};

const deleteAllUsers = async (req: Request, res: Response) => {
  try {
    const response = await deleteAllUserService();

    handleHttpRes(res, 200, 'Deleted database posts', response);
  } catch (error) {
    handleHttpError(res, 500, 'Error, the call failed.');
  };
};

export { allUsers, deleteAllUsers, deleteUser, updateUser };

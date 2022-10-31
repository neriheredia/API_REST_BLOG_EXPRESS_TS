import { Request, Response } from 'express';
import { allPostsService, deleteAllPostService, deletePostService, newPostService, onePostService, updatePostService } from '../services';
import { handleHttpError, handleHttpRes } from '../utils';

const createPostController = async (req: Request, res: Response) => {
  try {
    const newPost = await newPostService(req);

    handleHttpRes(res, 201, 'Post created', newPost);
  } catch (error) {
    handleHttpError(res, 500, 'Error, the post was not created.');
  };
};

const allPostsController = async (req: Request, res: Response) => {
  try {
    const posts = await allPostsService(req);

    handleHttpRes(res, 200, 'Successful call', posts);
  } catch (error) {
    handleHttpError(res, 500, 'Error, the call failed.');
  };
};

const onePostController = async (req: Request, res: Response) => {
  try {
    const post = await onePostService(req);

    handleHttpRes(res, 200, 'Successful call', post);
  } catch (error) {
    handleHttpError(res, 500, 'Error, the call failed.');
  };
};

const updatePostController = async (req: Request, res: Response) => {
  const id = req.params.id;

  try {
    const updatePost = await updatePostService(id, req);

    handleHttpRes(res, 200, 'Successful, post update', updatePost);
  } catch (error) {
    handleHttpError(res, 500, 'Error, the call failed.');
  };
};

const deletePostController = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const deletedPost = await deletePostService(id);

    handleHttpRes(res, 200, 'Successful call', deletedPost);
  } catch (error) {
    handleHttpError(res, 500, 'Error, the call failed.');
  };
};

const deleteAllPostsController = async (req: Request, res: Response) => {
  try {
    const response = await deleteAllPostService();

    handleHttpRes(res, 200, 'Deleted database posts', response);
  } catch (error) {
    handleHttpError(res, 500, 'Error, the call failed.');
  };
};

export { allPostsController, createPostController, deleteAllPostsController, deletePostController, onePostController, updatePostController };

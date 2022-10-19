import { Request, Response } from 'express';
import { allPostsService, deleteAllPostService, deletePostService, newPostService, onePostService, updatePostService } from '../services';
import { handleHttpError, handleHttpRes } from '../utils';

const createPostController = async (req: Request, res: Response) => {
  const postData = {
    category: req.body.category,
    description: req.body.description,
    photo: req.body.photo,
    title: req.body.title,
    user: req.body.user
  };

  try {
    const newPost = newPostService(postData);

    const savedPost = await newPost.save();

    handleHttpRes(res, 201, 'Post created', savedPost);
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
    const newPost = await updatePostService(id, req.body);

    handleHttpRes(res, 200, 'Successful call', newPost);
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

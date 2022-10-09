import { Request, Response } from 'express';
import { allPostsService, deleteAllPostService, deletePostService, newPostService, updatePostService } from '../services';
import { handleHttpError, handleHttpRes } from '../utils';

const createPost = async (req: Request, res: Response) => {
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

const allPosts = async (req: Request, res: Response) => {
  try {
    const posts = await allPostsService();

    handleHttpRes(res, 200, 'Successful call', posts);
  } catch (error) {
    handleHttpError(res, 500, 'Error, the call failed.');
  };
};

const updatePost = async (req: Request, res: Response) => {
  const id = req.params.id;

  try {
    const newPost = await updatePostService(id, req.body);

    handleHttpRes(res, 200, 'Successful call', newPost);
  } catch (error) {
    handleHttpError(res, 500, 'Error, the call failed.');
  };
};

const deletePost = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const deletedPost = await deletePostService(id);

    handleHttpRes(res, 200, 'Successful call', deletedPost);
  } catch (error) {
    handleHttpError(res, 500, 'Error, the call failed.');
  };
};

const deleteAllPosts = async (req: Request, res: Response) => {
  try {
    const response = await deleteAllPostService();

    handleHttpRes(res, 200, 'Deleted database posts', response);
  } catch (error) {
    handleHttpError(res, 500, 'Error, the call failed.');
  };
};

export { allPosts, createPost, deleteAllPosts, deletePost, updatePost };

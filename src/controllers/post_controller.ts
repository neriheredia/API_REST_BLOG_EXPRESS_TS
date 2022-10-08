import { Request, Response } from 'express';
import { newPostService } from '../services';
import { handleHttpError, handleHttpRes } from '../utils';

const createPost = async (req: Request, res: Response) => {
  const postData = {
    category: req.body.category,
    description: req.body.description,
    photo: req.body.photo,
    title: req.body.title,
    user: req.body.user
  }

  try {
    const newPost = newPostService(postData);

    const savedPost = await newPost.save();

    handleHttpRes(res, 201, 'Post created', savedPost);
  } catch (error) {
    handleHttpError(res, 500, 'Error, the post was not created.')
  };
};

export { createPost };

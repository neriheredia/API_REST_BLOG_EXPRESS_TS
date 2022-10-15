import PostModel from '../models/nosql/Post';
import { PostProps } from '../interfaces';
import { Request } from 'express';

export const newPostService = (post: PostProps) => new PostModel(post);

export const allPostsService = async (req: Request) => {
  const cat = req.query.cat;
  try {
    if (cat) {
      const categoryPosts = await PostModel.find({ category: cat }).populate('user');
      return categoryPosts;
    }
    const allPost = await PostModel.find({}).populate('user');

    return allPost;
  } catch (error) {
    return error;
  };
};

export const updatePostService = async (id:string, body: Request) => {
  try {
    const post = await PostModel.findByIdAndUpdate(
      { _id: id },
      {
        $set: body
      },
      { new: true }
    );

    return post;
  } catch (error) {
    return error;
  };
};

export const deletePostService = async (id:string) => {
  try {
    const post = await PostModel.findByIdAndDelete(id);

    return post;
  } catch (error) {
    return error;
  };
};

export const deleteAllPostService = async () => {
  try {
    const posts = await PostModel.deleteMany();

    return posts;
  } catch (error) {
    return error;
  };
};

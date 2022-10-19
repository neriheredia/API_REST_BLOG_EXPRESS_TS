import PostModel from '../models/nosql/Post';
import { PostProps } from '../interfaces';
import { Request } from 'express';
import { formattedCategory, stringToNumber } from '../utils';

export const newPostService = (post: PostProps) => new PostModel(post);

export const allPostsService = async (req: Request) => {
  const { cat, limit, page } = req.query;

  const limitFormatted = limit ? stringToNumber(limit) : 4;
  const pageFormatted = page ? stringToNumber(page) : 1;

  try {
    if (cat) {
      const categoryFormmated = formattedCategory(cat);

      const categoryPosts = await PostModel.paginate({ category: categoryFormmated }, { sort: { createdAt: -1 }, limit: limitFormatted, page: pageFormatted, populate: 'user' });

      return categoryPosts;
    }

    const allPost = await PostModel.paginate({}, { sort: { createdAt: -1 }, limit: limitFormatted, page: pageFormatted, populate: 'user' });

    return allPost;
  } catch (error) {
    return error;
  };
};

export const onePostService = async (req: Request) => {
  const { id } = req.params;

  try {
    const post = await PostModel.findById({ _id: id }).populate('user');

    return post;
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

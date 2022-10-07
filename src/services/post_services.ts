import PostModel from '../models/nosql/Post';
import { PostProps } from '../interfaces';

export const newPostService = (post: PostProps) => new PostModel(post);

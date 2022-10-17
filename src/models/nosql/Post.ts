import { Document, model, PaginateModel, Schema } from 'mongoose';
import paginate from 'mongoose-paginate-v2';
import { PostProps } from '../../interfaces';

const PostSchema = new Schema(
  {
    category: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    photo: {
      type: String,
      required: false
    },
    title: {
      type: String,
      required: true
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  },
  { timestamps: true }
);

PostSchema.plugin(paginate);

interface PostDocument extends Document, PostProps {};

const PostModel = model<PostDocument, PaginateModel<PostDocument>>('Post', PostSchema, 'posts');

export default PostModel;

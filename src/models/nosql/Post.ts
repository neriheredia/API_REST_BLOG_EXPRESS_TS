import { model, Schema } from 'mongoose';

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

const PostModel = model('Post', PostSchema);

export default PostModel;

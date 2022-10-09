import { Types } from 'mongoose';

export interface PostProps {
    category: string;
    description: string;
    photo: string;
    title: string;
    user: Types.ObjectId;
};

export interface NewPost extends PostProps {
    save(): unknown;
    _id: Types.ObjectId;
};

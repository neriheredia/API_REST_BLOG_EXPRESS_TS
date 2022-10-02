import { Types } from 'mongoose';

export interface UserProp {
  avatar?: string
  email: string
  firstName: string
  isAdmin?: boolean
  lastName: string
  password: string
  profilePic?: string
};

export interface AuthUser extends UserProp {
  _id: Types.ObjectId
};

import { Types } from 'mongoose';

export interface CategoryProps {
  name: string;
};

export interface NewCategory extends CategoryProps {
  save(): unknown;
  _id: Types.ObjectId;
};

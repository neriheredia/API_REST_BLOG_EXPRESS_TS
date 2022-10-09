import CategoryModel from '../models/nosql/Category';
import { CategoryProps } from '../interfaces';

export const newCategoryService = (category:CategoryProps) => new CategoryModel(category);

export const allCategoriesService = async () => {
  try {
    const categories = await CategoryModel.find({});

    return categories;
  } catch (error) {
    return error;
  };
};

export const updateCategoryService = async (id:string, name: string) => {
  try {
    const category = await CategoryModel.findByIdAndUpdate(
      { _id: id },
      {
        $set: {
          name
        }
      },
      { new: true }
    );

    return category;
  } catch (error) {
    return error;
  };
};

export const deleteCategoryService = async (id:string) => {
  try {
    const category = await CategoryModel.findByIdAndDelete(id);

    return category;
  } catch (error) {
    return error;
  };
};

export const deleteAllCategoryService = async () => {
  try {
    const categories = await CategoryModel.deleteMany();

    return categories;
  } catch (error) {
    return error;
  };
};

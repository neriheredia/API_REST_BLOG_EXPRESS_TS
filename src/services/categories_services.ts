import CategoryModel from '../models/nosql/Category';
import { CategoryProps } from '../interfaces';

export const newCategoryService = (category:CategoryProps) => new CategoryModel(category);

export const allCategoriesService = async () => await CategoryModel.find({});

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
    throw new Error('Failed call database.');
  }
};

export const deleteCategoryService = async (id:string) => await CategoryModel.findByIdAndDelete(id);

export const deleteAllCategoryService = async () => await CategoryModel.deleteMany();

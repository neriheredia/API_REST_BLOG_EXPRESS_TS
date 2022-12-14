import { Request, Response } from 'express';
import { allCategoriesService, deleteAllCategoryService, deleteCategoryService, newCategoryService, updateCategoryService } from '../services';
import { handleHttpError, handleHttpRes } from '../utils';

const creteCategoryController = async (req: Request, res: Response) => {
  const categoryData = {
    name: req.body.name
  };

  try {
    const newCategory = newCategoryService(categoryData);

    const savedCategory = await newCategory.save();

    handleHttpRes(res, 201, 'Category created', savedCategory);
  } catch (error) {
    handleHttpError(res, 500, 'Error, the category was not created.');
  };
};

const allCategoriesController = async (req: Request, res: Response) => {
  try {
    const categories = await allCategoriesService();

    handleHttpRes(res, 200, 'Successful call', categories);
  } catch (error) {
    handleHttpError(res, 500, 'Error, the call failed.');
  };
};

const updateCategoryController = async (req: Request, res: Response) => {
  const id = req.params.id;
  const name = req.body.name;

  try {
    const newCategory = await updateCategoryService(id, name);

    handleHttpRes(res, 200, 'Successful call', newCategory);
  } catch (error) {
    handleHttpError(res, 500, 'Error, the call failed.');
  };
};

const deleteCategoryController = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const deletedCategory = await deleteCategoryService(id);

    handleHttpRes(res, 200, 'Successful call', deletedCategory);
  } catch (error) {
    handleHttpError(res, 500, 'Error, the call failed.');
  };
};

const deleteAllCategoriesController = async (req: Request, res: Response) => {
  try {
    const response = await deleteAllCategoryService();

    handleHttpRes(res, 200, 'Deleted database categories', response);
  } catch (error) {
    handleHttpError(res, 500, 'Error, the call failed.');
  };
};

export { allCategoriesController, creteCategoryController, deleteCategoryController, deleteAllCategoriesController, updateCategoryController };

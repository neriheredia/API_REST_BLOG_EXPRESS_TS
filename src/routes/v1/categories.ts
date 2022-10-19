import { Router } from 'express';
import { tokenValidation } from '../../middleware';
import { allCategoriesController, creteCategoryController, deleteCategoryController, deleteAllCategoriesController, updateCategoryController } from '../../controllers';
import { cacheInit } from '../../settings/cache/expeditiousConfig';

const router = Router();

router.get('/', cacheInit, allCategoriesController);

router.get('/admin', tokenValidation, deleteAllCategoriesController);

router.post('/', tokenValidation, creteCategoryController);

router.put('/:id', tokenValidation, updateCategoryController);

router.delete('/:id', tokenValidation, deleteCategoryController);

export { router };

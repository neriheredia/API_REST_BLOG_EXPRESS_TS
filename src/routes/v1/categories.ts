import { Router } from 'express';
import { tokenValidation } from '../../middleware';
import { allCategories, creteCategory, deleteCategory, deleteAllCategories, updateCategory } from '../../controllers';
import { cacheInit } from '../../settings/cache/expeditiousConfig';

const router = Router();

router.get('/', cacheInit, allCategories);

router.get('/admin', tokenValidation, deleteAllCategories);

router.post('/', tokenValidation, creteCategory);

router.put('/:id', tokenValidation, updateCategory);

router.delete('/:id', tokenValidation, deleteCategory);

export { router };

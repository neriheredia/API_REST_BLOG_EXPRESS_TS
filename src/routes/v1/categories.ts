import { Router } from 'express';
import { tokenValidation } from '../../middleware';
import { allCategories, creteCategory, deleteCategory, deleteAllCategories, updateCategory } from '../../controllers';

const router = Router();

router.get('/', allCategories);

router.get('/admin', tokenValidation, deleteAllCategories);

router.post('/', tokenValidation, creteCategory);

router.put('/:id', tokenValidation, updateCategory);

router.delete('/:id', tokenValidation, deleteCategory);

export { router };

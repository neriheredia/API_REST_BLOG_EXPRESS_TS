import { Router } from 'express';
import { allCategories, creteCategory, deleteCategory, deleteAllCategories, updateCategory } from '../../controllers';

const router = Router();

router.get('/', allCategories);

router.get('/admin', deleteAllCategories);

router.post('/', creteCategory);

router.put('/:id', updateCategory);

router.delete('/:id', deleteCategory);

export { router };

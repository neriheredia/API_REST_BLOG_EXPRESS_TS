import { Router } from 'express';
import { allCategories, creteCategory, deleteCategory, deleteAllCategories, updateCategory } from '../../controllers';

const router = Router();

router.post('/', creteCategory);

router.get('/', allCategories);

router.put('/:id', updateCategory);

router.delete('/:id', deleteCategory);

router.get('/admin', deleteAllCategories);

export { router };

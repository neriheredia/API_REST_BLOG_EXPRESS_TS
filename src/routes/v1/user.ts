import { Router } from 'express';
import { allUsers, deleteAllUsers, deleteUser, updateUser } from '../../controllers';
import { tokenValidation } from '../../middleware';
import { cacheInit } from '../../settings/cache/expeditiousConfig';

const router = Router();

router.get('/', tokenValidation, cacheInit, allUsers);

router.get('/admin', tokenValidation, deleteAllUsers);

router.put('/:id', tokenValidation, updateUser);

router.delete('/:id', tokenValidation, deleteUser);

export { router };

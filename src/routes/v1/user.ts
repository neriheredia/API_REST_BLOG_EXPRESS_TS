import { Router } from 'express';
import { allUsersController, deleteAllUsersController, deleteUserController, updateUserController } from '../../controllers';
import { tokenValidation } from '../../middleware';
import { cacheInit } from '../../settings/cache/expeditiousConfig';

const router = Router();

router.get('/', tokenValidation, cacheInit, allUsersController);

router.get('/admin', tokenValidation, deleteAllUsersController);

router.put('/:id', tokenValidation, updateUserController);

router.delete('/:id', tokenValidation, deleteUserController);

export { router };

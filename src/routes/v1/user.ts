import { Router } from 'express';
import { allUsers, deleteAllUsers, deleteUser, updateUser } from '../../controllers';
import { tokenValidation } from '../../middleware';

const router = Router();

router.get('/', tokenValidation, allUsers);

router.get('/admin', tokenValidation, deleteAllUsers);

router.put('/:id', tokenValidation, updateUser);

router.delete('/:id', tokenValidation, deleteUser);

export { router };

import { Router } from 'express';
import { allUsers, deleteAllUsers, deleteUser, updateUser } from '../../controllers';

const router = Router();

router.get('/', allUsers);

router.get('/admin', deleteAllUsers);

router.put('/:id', updateUser);

router.delete('/:id', deleteUser);

export { router };

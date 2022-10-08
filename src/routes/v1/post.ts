import { Router } from 'express';
import { createPost } from '../../controllers';

const router = Router();

router.post('/', createPost);

export { router };

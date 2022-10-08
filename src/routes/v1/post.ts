import { Router } from 'express';
import { allPosts, createPost, deleteAllPosts, deletePost, updatePost } from '../../controllers';

const router = Router();

router.get('/', allPosts);

router.get('/admin', deleteAllPosts);

router.post('/', createPost);

router.put('/:id', updatePost);

router.delete('/:id', deletePost);

export { router };

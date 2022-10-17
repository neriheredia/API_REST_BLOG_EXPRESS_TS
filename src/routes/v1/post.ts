import { Router } from 'express';
import { tokenValidation } from '../../middleware';
import { allPosts, createPost, deleteAllPosts, deletePost, updatePost } from '../../controllers';
import { cacheInit } from '../../settings/cache/expeditiousConfig';

const router = Router();

router.get('/', cacheInit, allPosts);

router.get('/admin', tokenValidation, deleteAllPosts);

router.post('/', tokenValidation, createPost);

router.put('/:id', tokenValidation, updatePost);

router.delete('/:id', tokenValidation, deletePost);

export { router };

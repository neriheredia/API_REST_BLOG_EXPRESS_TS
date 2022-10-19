import { Router } from 'express';
import { tokenValidation } from '../../middleware';
import { allPostsController, createPostController, deleteAllPostsController, deletePostController, onePostController, updatePostController } from '../../controllers';
import { cacheInit } from '../../settings/cache/expeditiousConfig';

const router = Router();

router.get('/', cacheInit, allPostsController);

router.get('/:id', cacheInit, onePostController);

router.get('/admin', tokenValidation, deleteAllPostsController);

router.post('/', tokenValidation, createPostController);

router.put('/:id', tokenValidation, updatePostController);

router.delete('/:id', tokenValidation, deletePostController);

export { router };

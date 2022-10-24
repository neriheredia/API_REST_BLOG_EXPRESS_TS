import { Router } from 'express';
import { upload } from '../../middleware'
import { storageUploadImage, storageDeleteImage, storageUpdateImage } from '../../controllers'

const router = Router();

router.post('/upload', upload.single('image'), storageUploadImage);

router.delete('/delete/:id', storageDeleteImage);

router.put('/update/:id', upload.single('image'), storageUpdateImage);

export { router };

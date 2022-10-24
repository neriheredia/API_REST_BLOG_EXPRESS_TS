import { Response } from 'express';
import { deleteImage, uploadImage } from '../services';
import { handleHttpError, handleHttpResAuth } from '../utils';

const storageUploadImage = async (req: any, res: Response) => {
  try {
    const result: any = await uploadImage(req);

    if (!result) return handleHttpError(res, 500, 'Ocurrio un problema al subir la imagen');

    const data = {
      fileName: req.body.name,
      photo: result.secure_url,
      photoPublicId: result.public_id
    }

    handleHttpResAuth(res, 200, 'Upload image', data);
  } catch (error) {
    handleHttpError(res, 500, 'Ops, upload image error');
  };
};

const storageDeleteImage = async (req: any, res: Response) => {
  try {
    const result = await deleteImage(req);

    if (!result) return handleHttpError(res, 500, 'Ocurrio un problema al borrar la imagen');

    handleHttpResAuth(res, 200, 'Deleted image', result);
  } catch (error) {
    handleHttpError(res, 500, 'Ops, deleted image error');
  };
};

const storageUpdateImage = async (req: any, res: Response) => {
  try {
    await deleteImage(req);

    const result: any = await uploadImage(req);

    if (!result) return handleHttpError(res, 500, 'Ocurrio un problema al subir la imagen');

    const data = {
      fileName: req.body.name,
      photo: result.secure_url,
      photoPublicId: result.public_id
    }

    handleHttpResAuth(res, 200, 'Upload image', data);
  } catch (error) {
    handleHttpError(res, 500, 'Ops, deleted image error');
  };
};

export { storageUploadImage, storageDeleteImage, storageUpdateImage };

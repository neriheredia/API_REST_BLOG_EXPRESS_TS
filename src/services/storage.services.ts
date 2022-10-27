import { v2 } from '../settings/cloudinary/cloudinaryConfig';

export const uploadImage = async (req: any) => {
  console.log(req.file);
  console.log(req.file.path);
  try {
    const result = await v2.uploader.upload(req.file?.path);

    return result;
  } catch (error) {
    return error;
  }
};

export const deleteImage = async (req: any) => {
  const { id } = req.params;

  try {
    const result = await v2.uploader.destroy(id);

    return result;
  } catch (error) {
    return error;
  }
};

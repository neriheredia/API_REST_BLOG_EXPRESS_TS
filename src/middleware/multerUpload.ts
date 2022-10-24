import multer, { diskStorage } from 'multer';
import path from 'path';

const upload = multer({
  storage: diskStorage({}),
  fileFilter: (req, file, cb: any) => {
    const ext = path.extname(file.originalname);
    if (ext !== '.jpg' && ext !== '.jpeg' && ext !== '.png') return cb(new Error('File type is not supported'), false);
    cb(null, true);
  }
});

export { upload };

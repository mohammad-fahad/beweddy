import express from 'express';
import { removeImage, uploadImage } from '../controllers/uploadControllers.js';
import { protect } from '../middlewares/auth.js';
import { uploader } from '../middlewares/upload.js';

const router = express.Router();

router.route('/').post(uploader, uploadImage);
router.route('/delete').post(removeImage);

export default router;

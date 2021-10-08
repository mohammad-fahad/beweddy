// tangoRoutes.js
import express from 'express';
import { getGifts } from '../controllers/tangoControllers.js';



const router = express.Router();
router.route('/').post(getGifts);


export default router;

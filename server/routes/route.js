import express from 'express';
const router = express.Router();
import { create, get} from '../controllers/user.js';
import upload from '../middlewares/upload.js'

// Route Level Middleware - For Parsing multipart/form-data
router.use('/create-user', upload.fields([{ name: 'resume', maxCount: 1 }]))

router.post('/create-user', create)
router.get('/get-users', get)

export default router;
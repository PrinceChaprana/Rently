import express from 'express';
import {loginUser,signupUser} from '../controller/userController.js';
import {uploadImage,getImage} from '../controller/imageController.js';

import { createPost, updatePost, deletePost, getPost, getAllPosts,searchProductbyKeyword } from '../controller/postController.js';
import { authenticateToken, createNewToken } from '../controller/jwtController.js';

//middleware
import upload from '../utils/upload.js';

const router = express.Router();


router.post('/login', loginUser);
router.post('/signup', signupUser);
router.post('/file/upload',upload.single('file'),uploadImage);
router.get('/file/:filename', getImage);

router.get('/products/:id', authenticateToken, getPost);
router.get('/products', authenticateToken, getAllPosts);
router.delete('/delete/:id', authenticateToken, deletePost);

router.get('/search/:keyword',searchProductbyKeyword)

router.post('/create',authenticateToken, createPost);

export default router;
import express from 'express';
import {loginUser,signupUser,getUserData,addtoWishlist} from '../controller/userController.js';
import {uploadImage,getImage} from '../controller/imageController.js';

import { createPost, deletePost, getPost, getAllPosts,searchProductbyKeyword } from '../controller/postController.js';
import { authenticateToken, createNewToken } from '../controller/jwtController.js';

//middleware
import upload from '../utils/upload.js';

const router = express.Router();


router.post('/login', loginUser);
router.post('/signup', signupUser);
router.get('/profile/:username',getUserData);

router.post('/file/upload',upload.single('file'),uploadImage);
router.get('/file/:filename', getImage);

router.get('/product', authenticateToken, getPost);
router.get('/products',  getAllPosts);
router.delete('/delete/:id', authenticateToken, deletePost);
router.put('/wishlist',authenticateToken, addtoWishlist);

router.get('/search',searchProductbyKeyword)

router.post('/create',authenticateToken, createPost);

export default router;
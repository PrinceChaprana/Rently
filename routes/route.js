import express from 'express';
import {loginUser,signupUser,getUserData} from '../controller/userController.js';
import {uploadImage,getImage} from '../controller/imageController.js';

import { createPost, deletePost, getPost, getAllPosts,searchProductbyKeyword } from '../controller/postController.js';
import { authenticateToken, createNewToken } from '../controller/jwtController.js';
import { AddToWishlist,GetWishlist } from '../controller/wishlistController.js';

//middleware
import upload from '../utils/upload.js';

const router = express.Router();


router.post('/login', loginUser);
router.post('/signup', signupUser);
router.get('/profile/:username',getUserData);

router.post('/file/upload',upload.single('file'),uploadImage);
router.get('/file/:filename', getImage);

router.get('/product', getPost);
router.get('/products', getAllPosts);
router.delete('/delete/:id', authenticateToken, deletePost);

router.put('/wishlist',authenticateToken, AddToWishlist);
router.get('/wishlist',authenticateToken, GetWishlist);

router.get('/search',searchProductbyKeyword)

router.post('/create',authenticateToken, createPost);

export default router;
import express from 'express';
import {loginUser,signupUser,getUserData,logoutUser} from '../controller/userController.js';
import {uploadImage,getImage} from '../controller/imageController.js';

import { createPost, deletePost, getPost, getAllPosts} from '../controller/postController.js';
import {searchDefaultProduct,filterSearchProduct} from '../controller/searchController.js';    
import { authenticateToken, createNewToken } from '../controller/jwtController.js';
import { AddToWishlist,GetWishlist } from '../controller/wishlistController.js';
import {createConversation} from '../controller/conversationController.js';
import {addMessage ,getMessage } from '../controller/messageController.js';
//middleware
import upload from '../utils/upload.js';

const router = express.Router();


router.post('/login', loginUser);
router.post('/signup', signupUser);
router.get('/profile/:username',getUserData);
router.post('/logout', logoutUser);

router.post('/token',createNewToken);

router.post('/file/upload',upload.single('file'),uploadImage);
router.get('/file/:filename', getImage);

router.get('/product', getPost);
router.get('/products', getAllPosts);
router.delete('/delete/:id', authenticateToken, deletePost);

router.put('/wishlist',authenticateToken, AddToWishlist);
router.get('/wishlist',authenticateToken, GetWishlist);

router.get('/search',searchDefaultProduct)
router.get('/search/filter/',filterSearchProduct)

router.post('/create',authenticateToken, createPost);

//chating routes
router.post('/conversation',authenticateToken, createConversation);
router.post('/message/add',authenticateToken, addMessage);
router.get('/message/get',authenticateToken,getMessage);

export default router;
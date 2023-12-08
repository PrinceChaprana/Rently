import multer from 'multer';
import dotenv from 'dotenv';
import { GridFsStorage } from 'multer-gridfs-storage';

dotenv.config();

const storage = new GridFsStorage({
    url: `mongodb+srv://mern-book-store:${process.env.DB_PASSWORD}@cluster0.8wybao7.mongodb.net/?`,
    options: { useNewUrlParser: true },
    file: (request, file) => {
        const match = ["image/png","image/jpeg", "image/jpg"];

        if(match.indexOf(file.mimeType) === -1) 
            return`${Date.now()}-blog-${file.originalname}`;

        return {
            bucketName: "photos",
            filename: `${Date.now()}-blog-${file.originalname}`
        }
    }
});

export default multer({storage}); 
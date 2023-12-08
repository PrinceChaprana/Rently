import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb+srv://mern-book-store:${password}@cluster0.8wybao7.mongodb.net/?`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;
import mongoose from 'mongoose';

const PostSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    discription: {
        type: String,
        required: true
    },
    picture: {
        type: String,
        required: false
    },
    username: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true   
    },
    price: {
        type: String,
        required: true   
    },
    postDate: {
        type: Date
    },
    addressline:{
        type:String
    },
    city:{
        type:String
    },
    country:{
        type:String
    },
    state:{
        type:String
    },
    pincode:{
        type:String
    }
});


const post = mongoose.model('post', PostSchema);

export default post;
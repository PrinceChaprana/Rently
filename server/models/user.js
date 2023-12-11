import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    latitude:{
        type:String
    },
    longitude:{
        type:String
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
    },
    picture:{
        type:String
    }
});


const user = mongoose.model('user', userSchema);

export default user;
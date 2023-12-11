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
    location:{
        type:{type:String},
        coordinates:[Number]
    }
    ,
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
userSchema.index({location:'2dsphere'});

const user = mongoose.model('user', userSchema);

export default user;
import mongoose from 'mongoose';

const MessageSchema = mongoose.Schema({
    conversationId:{
        type:String,
    },
    sender:{
        type:String,
    },
    receiver:{
        type:String,
    },
    messageType:{
        type:String,
    },
    message:{
        type:String,
    }
});

const message = mongoose.model('message', MessageSchema);

export default message;
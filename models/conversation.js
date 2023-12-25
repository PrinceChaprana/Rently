import mongoose from 'mongoose';

const ConversationSchema = mongoose.Schema({
    members:{
        type:Array,
        required:true,
    }
});

const conversation = mongoose.model('conversation', ConversationSchema);

export default conversation;
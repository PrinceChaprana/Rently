import Message from "../models/message.js";

export const addMessage = async(request,response) => {
    const newMessage = new Message(request.body);
    try {
        await newMessage.save();
        response.status(200).json('message saved successfully');
    } catch (error) {
        response.status(500).json({message: 'error saving message',error: error});   
    }
}

export const getMessage = async(request,response) => {
    try{
        let id = request.query.id;
        const messages = await Message.find({conversationId : id});
        console.log(id);
        return response.status(200).json(messages);
    }catch (error) {
        response.status(500).json({message:'error getting message',error: error});
    }
}
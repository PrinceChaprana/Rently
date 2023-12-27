import Conversation from "../models/conversation.js"

export const createConversation = async (request, response) => {
    let sender = request.query.sender;
    let receiver = request.query.receiver;
    //console.log(sender, receiver);

    const exist = await Conversation.findOne({ members: { $all: [sender, receiver] } });
    //console.log(exist);
    if (exist) return response.status(200).json(exist);
    //console.log('craete new Conversation');

    const newConversation = new Conversation({
        members: [sender, receiver]
    });

    try {
        const savedConversation = await newConversation.save();
        //console.log(savedConversation);
        response.status(200).json(savedConversation);
    } catch (err) {
        response.status(500).json({ msg: "Error saving conversation", err: err });
    }

}


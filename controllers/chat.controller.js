const Message = require('../models/chat.model');
const addMessage = async (req, res) => {
    try {
        const {from, to, message} = req.body;
        const chat = await Message.create({
            message: {text: message},
            user: [from, to],
            sender: from,
        });
        if (chat) {
            res.status(200).json(chat);
        }
    }
    catch (err) {
        res.status(500).json(err);
    }
}

const getMessages = async (req, res) => {
    try {
        const {from, to} = req.body;
        const messages = await Message.find({
            user: {
                $all: [from, to],
            },
        }).sort({updatedAt: 1});

        const projectedMessages = messages.map((message) => {
            return {
                fromSelf: message.sender.toString() == from,
                message: message.message.text,
            };
        });
        if (messages) {
            res.status(200).json(projectedMessages);
        }
    }
    catch (err) {
        res.status(500).json(err);
    }
}

module.exports = {
    addMessage,
    getMessages,
}
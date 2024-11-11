// controllers/messageController.js
const Message = require('../../models/Message');

// Create a new message
exports.createMessage = async (req, res) => {
    try {
        const { firstName, lastName, email, phone, country, company, industry, message } = req.body;

        const newMessage = new Message({
            firstName,
            lastName,
            email,
            phone,
            country,
            company,
            industry,
            message
        });

        newMessage
            .save()
            .then(() => {
                res.status(201).json({ status: true, message: 'Message sent successfully!', type: 'success' });
            })
            .catch(err => {
                console.log(err);
                return res.json({ status: false, message: 'Error sending message', type: 'error' });
            });
    } catch (err) {
        res.status(500).json({ message: 'Error sending message', error: err.message });
    }
};

// Respond to a message
exports.respondToMessage = async (req, res) => {
    const { id } = req.params;
    const { response } = req.body;

    try {
        const message = await Message.findByIdAndUpdate(
            id,
            { response, isLooked: true },
            { new: true }
        );

        if (!message) {
            return res.status(404).json({ message: 'Message not found' });
        }

        res.status(200).json({ message: 'Response added successfully', data: message });
    } catch (err) {
        res.status(500).json({ message: 'Error responding to message', error: err.message });
    }
};

// Get all messages
exports.getMessages = async (req, res) => {
    try {
        const messages = await Message.find().sort({ createdAt: -1 }); // Sort messages by creation date
        res.status(200).json(messages);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching messages', error: err.message });
    }
};

const Message = require('../models/model');

// Create and add a message into database
exports.create = async (req, res) => {
    // validate request
    if (!req.body) {
        res.status(400).send({ message: "Do not submit empty content."});
    }

    // new message
    const msg = new Message({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        message: req.body.message
    });

    msg.save(msg)
    .then(data => {
        res.status(200).send({ message: "Message sent successfully"});
    })
    .catch(err => {
        res.status(500).send({ message: "An error occured while sending message..."})
    })
}
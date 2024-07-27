// routes/messageRoutes.js
import express from 'express';
import Message from '../modals/Message.js';

const router = express.Router();

// Endpoint to send a message
router.post('/', (req, res) => {
  const newMessage = new Message(req.body);
  newMessage.save()
    .then(message => res.json(message))
    .catch(err => res.status(500).json({ error: err.message }));
});

// Endpoint to get all messages for doctors
router.get('/', (req, res) => {
  Message.find({ recipient: 'doctor' })
    .then(messages => res.json(messages))
    .catch(err => res.status(500).json({ error: err.message }));
});

export default router;

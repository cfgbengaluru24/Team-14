// src/Components/AdminDashboard/SendMessage.jsx
import React, { useState } from 'react';
import axios from 'axios';

const SendMessage = () => {
  const [message, setMessage] = useState('');

  const sendMessage = () => {
    axios.post('http://localhost:3001/send', {
      sender: 'admin',
      recipient: 'doctor',
      content: message,
    })
    .then(res => {
      setMessage('');
      alert('Message sent!');
    })
    .catch(err => console.log(err));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Send Message to Doctors</h2>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message here"
      />
      <button onClick={sendMessage}>Send Message</button>
    </div>
  );
};

export default SendMessage;

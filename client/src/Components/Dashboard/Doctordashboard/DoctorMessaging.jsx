
import React, { useState, useEffect } from 'react';
import '../../../styles/DoctorMessaging.css'
import axios from 'axios';

const ViewMessages = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/doctor-messages')
      .then(res => setMessages(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="messages-container">
      <h2>Announcement from Admin</h2>
      {messages.length === 0 ? (
        <p>No messages.</p>
      ) : (
        <ul>
          {messages.map((message) => (
            <li key={message._id}>
              {message.content} <small>({new Date(message.timestamp).toLocaleString()})</small>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ViewMessages;

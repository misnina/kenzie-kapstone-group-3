import React, { useState } from 'react'
import { socket } from '../service/socket';

export default function ChatBar({ name }) {
  const [message, setMessage] = useState('');

  function handleChange(e) {
    setMessage(e.target.value);
  }

  function sendMessage(event) {
    console.log('sending message');
    console.log(name);
    socket.emit('new-message', { name: name, message: message });
  }

  return (
    <div className="chat-bar">
      <input onChange={handleChange}/>
      <button onClick={(e) => sendMessage()}>Send</button>
    </div>
  )
}

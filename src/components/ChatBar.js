import React, { useState } from 'react'
import { socket } from '../service/socket';

export default function ChatBar(props) {
  const [message, setMessage] = useState('');

  function handleChange(e) {
    setMessage(e.target.value);
  }

  function sendMessage(event) {
    socket.emit('new-message', { name: 'general', message: message })
  }

  return (
    <div className="chat-bar">
      <input onChange={handleChange}/>
      <button onClick={(e) => sendMessage()}>Send</button>
    </div>
  )
}

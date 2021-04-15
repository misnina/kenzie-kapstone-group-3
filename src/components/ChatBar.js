import React, { useState } from 'react'
import { socket } from '../service/socket';
import { useStore } from '../store/store';


export default function ChatBar({ name }) {
  const [message, setMessage] = useState('');
  const messages = useStore(state => state.messages);

  function handleChange(e) {
    setMessage(e.target.value);
  }

  function sendMessage(event) {
    console.log(messages);
    socket.emit('new-message', { name: name, message: message });
    socket.emit('get-messages', name);
    console.log(messages);
  }

  return (
    <div className="chat-bar">
      <input onChange={handleChange}/>
      <button onClick={(e) => sendMessage()}>Send</button>
    </div>
  )
}

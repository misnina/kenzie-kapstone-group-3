import React, { useState } from 'react'
import { socket } from '../service/socket';
import { useStore } from '../store/store.js';


export default function ChatBar({ name }) {
  const [message, setMessage] = useState('');
  const currentUser = useStore(state => state.currentUser)
  //passing down through props is the only workaround I can think of

  function handleChange(e) {
    setMessage(e.target.value);
  }

  function sendMessage(event) {
    console.log(currentUser);
    console.log(name);
    socket.emit('new-message', { channelName: name, message: message, user: currentUser});
    //socket.emit('get-messages', name);
    setMessage('');
  }

  return (
    <div className="chat-bar">
      <input value={message} onChange={handleChange}/>
      <button onClick={(e) => sendMessage()}>Send</button>
    </div>
  )
}

import React, { useState } from 'react'

export default function ChatBar(props) {
  const [message, setMessage] = useState('');

  function handleReply(e) {
    setMessage(e.target.value);
  }

  return (
    <div className="chat-bar">
      <input onChange={handleReply}/>
      <button onClick={(e) => props.createNewMessage(e, 0, message)}>submit</button>
    </div>
  )
}

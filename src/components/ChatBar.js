import React, { useState } from 'react'

export default function ChatBar(props) {
  const [message, setMessage] = useState('');

  function handleReply(e) {
    setMessage(e.target.value);
  }

  return (
    <div className="chat-bar">
      <input 
        value={message}
        onChange={handleReply}
      />
      <button onClick={
        (e) => {
          if (message !== '') {
            props.createNewMessage(e, 0, message);
            setMessage('');
          } else {
            //say it wasn't submitted
          }
        }
      }
      >submit</button>
    </div>
  )
}

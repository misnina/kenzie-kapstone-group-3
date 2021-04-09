import React, { useState } from 'react'

export default function ChatBar(props) {
  const [message, setMessage] = useState('');

  function handleReply(e) {
    setMessage(e.target.value);
  }

  return (
    <div className="chat-bar">
      <form onSubmit={
        (event) => {
            event.preventDefault();
            if (message !== '') {
              props.createNewMessage(event, 0, message);
              setMessage('');
            } else {
              //say it wasn't submitted
            }
          }
      }>
        <input 
          value={message}
          onChange={handleReply}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  )
}

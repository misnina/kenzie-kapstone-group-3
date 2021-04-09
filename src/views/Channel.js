import React, { useEffect, useState } from 'react'
import ChatBar from '../components/ChatBar'
import Message from '../components/Message';
import { getChannelMessages, postMessage, deleteMessage } from '../fetchRequests';

import '../styles/Channel.scss';

let messageid = 2;

export default function Channel(props) {
  const [ channel, setChannel ] = useState(null);

  useEffect(() => {
    getChannelMessages('public', 0).then(data => {
      if (!data) return;
      setChannel(data);
    })


  }, [])

  function createNewMessage(event, userid, text) {
    event.preventDefault();
    postMessage('public', 0, userid, text)
    .then(data => {
      setChannel(data);
    })
  }

  function handleDelete(event, messageid) {
    event.preventDefault();
    deleteMessage('public', channel.id, messageid)
    .then(data => {
      console.log(data);
      setChannel(data);
    })
  }

  return (
    <div className="channel">
      <div className="messages">
        {channel && channel.messages.map(message => {
          return <Message
          message={message}
          key={`message-${message.id}`}
          handleDelete={handleDelete}
        />
        })}
      </div>
      <ChatBar
        createNewMessage={createNewMessage}
      />
    </div>
  )
}

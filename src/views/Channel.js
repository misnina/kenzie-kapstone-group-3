import React, { useEffect, useState } from 'react'
import ChatBar from '../components/ChatBar'
import Message from '../components/Message';

import { getChannelMessages, postMessage } from '../fetchRequests';

let messageid = 2;

export default function Channel(props) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    getChannelMessages('public', 0).then(data => {
      if (!data) return;
      setMessages(data);
    })


  }, [])

  function createNewMessage(event, userid, text) {
    event.preventDefault();

    postMessage('public', 0, userid, text)
    .then(data => {
      console.log(data.messages);
      setMessages(data.messages);
    })

    // const newMessage = {
    //   id: messageid,
    //   author: userid,
    //   createdAt: Date.now(),
    //   updatedAt: Date.now(),
    //   text
    // }
    // messageid++;
    // setMessages(state => {
    //   return [
    //     ...state,
    //     newMessage
    //   ]
    // })
  }

  return (
    <div className="channel">
      <div className="messages">
        {messages && messages.map(message => {
          return <Message
          message={message}
          key={`message-${message.id}`}
        />
        })}
      </div>
      <ChatBar
        createNewMessage={createNewMessage}
      />
    </div>
  )
}

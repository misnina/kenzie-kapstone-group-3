import React, { useEffect, useState } from 'react'
import ChatBar from '../components/ChatBar'
import Message from '../components/Message';

import { useStore } from '../store/store.js'

let messageid = 2;

export default function Channel() {
  const messages = useStore((state) => state.messages);
  const setMessages = useStore((state) => state.setMessages);

  console.log(`Messages from channel: ${messages}`)

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
      <ChatBar />
    </div>
  )
}

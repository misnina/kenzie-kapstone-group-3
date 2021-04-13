import React, { useEffect } from 'react'
import ChatBar from '../components/ChatBar'
import Message from '../components/Message';

import { useStore } from '../store/store.js'
import { socket } from '../service/socket.js'

export default function Channel({ name }) {
  const messages = useStore((state) => state.messages);
  
  useEffect(() => {
    socket.emit('join-channel', name)

    return () => {
      socket.emit('leave-channel', name)
    }
  }, []);

  useEffect(() => {
    
  }, [messages])

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
      <ChatBar name={name} />
    </div>
  )
}

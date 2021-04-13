import React, { useEffect } from 'react'
import ChatBar from '../components/ChatBar'
import Message from '../components/Message';
import { getChannelMessages, postMessage, deleteMessage } from '../fetchRequests';

import '../styles/Channel.scss';

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

  console.log(messages);
  //make a message key in backend later
  return (
    <div className="channel">
      <div className="messages">
        {messages && messages.map((message, i) => {
          return <Message
          message={message}
          key={`message-${i}`}
        />
        })}
      </div>
      <ChatBar name={name} />
    </div>
  )
}

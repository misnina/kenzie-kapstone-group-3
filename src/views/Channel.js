import React, { useEffect } from 'react'
import ChatBar from '../components/ChatBar'
import Message from '../components/Message';
import { getChannelMessages } from '../fetchRequests';

import { useStore } from '../store/store.js'
import { socket } from '../service/socket.js'

import '../styles/Channel.scss';

export default function Channel({ name }) {
  const messages = useStore((state) => state.messages);
  
  useEffect(() => {
    socket.emit('join-channel', name);
    socket.emit('get-messages', name);
    return () => {
      socket.emit('leave-channel', name)
    }
  }, [name]);

  //make a message key in backend later
  console.log(messages);
  return (
    <div className="channel">
      <div className="messages">
        {messages && messages.map(message => {
          console.log(message.author);
          return (<Message
          authorid={message.author}
          message={message.text}
          key={`message-${message._id}`}
        />)
        })}
      </div>
      <ChatBar name={name} />
    </div>
  )
}

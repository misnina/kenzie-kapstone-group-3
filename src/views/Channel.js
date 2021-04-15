import React, { useEffect } from 'react'
import ChatBar from '../components/ChatBar'
import Message from '../components/Message';
import { getChannelMessages } from '../fetchRequests';

import { useStore } from '../store/store.js'
import { socket } from '../service/socket.js'

//temporary
import { nanoid } from 'nanoid';

import '../styles/Channel.scss';

export default function Channel({ name }) {
  const messages = useStore((state) => state.messages);
  
  useEffect(() => {
    socket.emit('join-channel', name);
    return () => {
      socket.emit('leave-channel', name)
    }
  }, []);

  //make a message key in backend later
  return (
    <div className="channel">
      <div className="messages">
        {messages && messages.map(message => {
          return (<Message
          message={message}
          key={`message-${nanoid()}`}
        />)
        })}
      </div>
      <ChatBar name={name} />
    </div>
  )
}

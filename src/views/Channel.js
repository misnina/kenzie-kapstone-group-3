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
      <ChatBar name={name} />
    </div>
  )
}

import React, { useEffect, useState } from 'react'
import ChatBar from '../components/ChatBar'
import Message from '../components/Message';

import { getChannelMessages } from '../fetchRequests';

//the fetch is not working
const db = {
  public_channels: [
      {
        id: 0,
        name: 'general',
        displayName: 'General',
        rules: [
          `#1`,
          `#2`,
          `#3`
        ],
        messages: [
          {
            id: 0,
            author: 0,
            createdAt: Date.now(),
            updatedAt: Date.now(),
            text: `One two three four five.`,
          },
          {
            id: 1,
            author: 1,
            createdAt: Date.now(),
            updatedAt: Date.now(),
            text: `Why are we counting?`,
          }
        ],
      },
    ]
  }

let messageid = 2;

export default function Channel(props) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    //setMessages(db.public_channels[0].messages);

    getChannelMessages('public', 0).then(data => {
      if (!data) return;
      setMessages(data.body);
    })


  }, [])

  function createNewMessage(event, userid, text) {
    event.preventDefault();
    const newMessage = {
      id: messageid,
      author: userid,
      createdAt: Date.now(),
      updatedAt: Date.now(),
      text
    }
    messageid++;
    setMessages(state => {
      return [
        ...state,
        newMessage
      ]
    })
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

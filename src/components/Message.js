import React from 'react'
import '../styles/Message.scss';

export default function Message(props) {
  return (
    <div className="message">
      <div className="message-body">
        {props.message.text}
      </div>
      <button 
      onClick={(e) => props.handleDelete(e, props.message.id)}>Delete</button>
    </div>
  )
}

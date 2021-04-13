import React from 'react'
import '../styles/Message.scss';

export default function Message({ message }) {
  return (
    <div className="message">
      <div className="message-body">
        {props.message}
      </div>
      {/* <button 
        onClick={(e) => props.handleDelete(e, props.message.id)}>Delete</button> */}
    </div>
  )
}



import React, { useState, useEffect } from 'react'
import '../styles/Message.scss';
import { getUser } from '../fetchRequests';

export default function Message({ message, authorid }) {
  const [author, setAuthor] = useState({username: 'Loading...', id: authorid});

  useEffect(() => {
    console.log('why are you not running');
    console.log(authorid);
    const authorLookup = authorid ? authorid.toString() : '';
    getUser(authorLookup)
    .then(user => {
      console.log(user);
      setAuthor(user);
    })
  }, [])

  return (
    <div className="message">
      <div className="author-bar">
        {author.username}
      </div>
      <div className="message-body">
        {message}
      </div>
      {/* <button 
        onClick={(e) => props.handleDelete(e, props.message.id)}>Delete</button> */}
    </div>
  )
}



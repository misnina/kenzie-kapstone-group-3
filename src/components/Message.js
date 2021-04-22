import React, { useState, useEffect } from 'react'
import '../styles/Message.scss';
import { getUser } from '../fetchRequests';
import { useStore } from '../store/store';

export default function Message({ message, author }) {
  const currentUser = useStore(state => state.currentUser);
  const [mAuthor, setAuthor] = useState(author._id ?
    { username: currentUser.username, _id: currentUser._id}
    : {username: 'Loading...', id: author});

  useEffect(() => {
    if (author._id) {
      setAuthor(currentUser);
      return
    }

    getUser(mAuthor.id.toString())
    .then(user => {
      console.log(user);
      setAuthor(user);
    })
  }, [])

  return (
    <div className="message">
      <div className="author-bar">
        {mAuthor.username}
      </div>
      <div className="message-body">
        {message}
      </div>
      {/* <button 
        onClick={(e) => props.handleDelete(e, props.message.id)}>Delete</button> */}
    </div>
  )
}



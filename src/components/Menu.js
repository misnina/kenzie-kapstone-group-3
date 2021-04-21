import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/Menu.scss';

import { useStore } from '../store/store';

export default function Menu() {
  const isLoggedIn = useStore(state => state.isLoggedIn);

  return (
    <div id="Menu">
      <h1>squirl</h1>
      <div id="top-menu">
        <div className='link-list'>
          {isLoggedIn ? <Link to="/">Profile</Link> : <Link to="/">Home</Link>}
        </div>
      </div>
       <div id="lower-menu">
        <h2>Chatrooms</h2>
        <div className='link-list'>
          <Link to="/general">General</Link>
          <Link to="/books">Books & TV</Link>

          <Link to="/gaming">Gaming</Link>
        </div>
        <button>Logout</button>
      </div>
    </div>
  )
}

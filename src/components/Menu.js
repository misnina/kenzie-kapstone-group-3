import React from 'react'
import '../styles/Menu.scss';

export default function Menu() {
  return (
    <div id="Menu">
      <h1>things</h1>
      <div id="top-menu">
        <Link to="/profile">Profile</Link>
        <Link to="/">Home</Link>
      </div>
      <div id="lower-menu">
        <h1>bottom things</h1>
        <Link to="/general">General</Link>
        <Link to="/books">Books</Link>
        <Link to="/tv">Tv</Link>
        <Link to="/gaming">Gaming</Link>

        <button onClick={logout}>Logout</button>

      </div>
    </div>
  )
}

import React, { useState } from 'react'
import { socket } from '../service/socket';

export default function Home() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    if (!username || !password) return;

    console.log('whoops');
    socket.emit('login', username, password);
  }

  return (
    <div>
      <form onSubmit={handleLogin}>
        Username: <input 
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        Password: <input 
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

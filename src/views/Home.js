import React, { useState } from 'react'
import { socket } from '../service/socket';
import { useStore } from '../store/store';

export default function Home() {
  const user = useStore(state => state.user);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    if (!username || !password) return;

    socket.emit('login', { username: username, password: password });
  }

  return (
    <div>
      <form onSubmit={handleLogin}>
        Username: <input 
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        Password: <input 
          type='password'
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

import React, { useState } from 'react'
import { socket } from '../service/socket';
import { useStore } from '../store/store';

export default function Home() {
  const currentUser = useStore(state => state.user);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [signUsername, signSetUsername] = useState('');
  const [signPassword, signSetPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    if (!username || !password) return;

    socket.emit('login', { username: username, password: password });
  }

  const handleSignUp = (event) => {
    event.preventDefault();
    console.log('thing');
    if (!signUsername || !signPassword) return;


    socket.emit('new-user', { username: signUsername,
    password: signPassword });
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

      <form onSubmit={handleSignUp}>
        <h2>Sign Up</h2>
        Username: <input 
          value={signUsername}
          onChange={e => signSetUsername(e.target.value)}
        />
        Password: <input 
          type='password'
          value={signPassword}
          onChange={e => signSetPassword(e.target.value)}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  )
}

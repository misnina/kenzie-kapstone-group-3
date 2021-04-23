import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { useStore } from '../store/store';

import Avatar from '../components/Avatar';

import '../styles/Profile.scss';
import { getUser } from '../fetchRequests';
import { socket } from '../service/socket';

//profile photo is url for noq

const friendPhotoURL01 = 'https://i.imgur.com/AmfgQV1.png';
const friendPhotoURL02 = 'https://i.imgur.com/6FRVdHg.png';

const mockUser = {
  photoURL: 'https://i.imgur.com/uvrVHI1.png',
}

export default function Profile() {
  const currentUser = useStore(state => state.currentUser);
  const setCurrentUser = useStore(state => state.currentUser);

  const [fullUser, setFullUser] = useState({
    username: 'Loading',
    profile: {
      age: '',
      birthday: '',
      location: '',
      about: ''}
    })

  const [isLoaded, toggleIsLoaded] = useState(false);

  useEffect(() => {
    getUser(currentUser._id)
    .then(user => {
      setFullUser(user);
      toggleIsLoaded(!isLoaded);
      setUsername(user.username);
      setAge(user.profile.age);
      setBirthday(new Date(user.profile.birthday));
      setLocation(user.profile.location);
      setAbout(user.profile.about);
    })
  }, [])

  const {age, birthday, location, about} = fullUser.profile || {age: '', birthday: '', location: '', about: ''};
  const bioinfoString = `${age ? `${age} ||` : ''} ${birthday ? `${moment(birthday).format("MMM Do YY")} ||` : ''} ${location ? location : ''}`;

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [formAge, setAge] = useState('');
  const [formBirthday, setBirthday] = useState(isLoaded ? new Date(fullUser.profile.birthday) || Date.now() : Date.now());
  const [formLocation, setLocation] = useState('');
  const [formAbout, setAbout] = useState('');

  const handleUpdate = (event) => {
    event.preventDefault();
    socket.emit('update-user', 
      {
        username: username || fullUser.username,
        password,
        profile: {
          age: formAge || fullUser.age,
          birthday: formBirthday || fullUser.birthday,
          location: formLocation || fullUser.location,
          about: formAbout || fullUser.about,
        }
      }
    )
  }

  return (
    <div id='Profile'>
      {isLoaded && 
      <>
      <div className='card profile-card'>

        <div className='profile-heading'>
          <div className='profile-heading-left'>
            <Avatar size={100} name={fullUser.username} photoURL={mockUser.photoURL}/>
            <div className='bio'>
              <h1>
                {fullUser.username}
              </h1>
              <div className='various-info'>
                {bioinfoString}
              </div>
            </div>
          </div>

          <div className='profile-heading-right'>
            <h2>Friends List</h2>
            <div className='temp-group'>
              <Avatar photoURL={friendPhotoURL01}/>
              <Avatar photoURL={friendPhotoURL02}/>
            </div>
          </div>
        </div>

        <div className='about'>
          <h1>about</h1>
          <p>{about}</p>
        </div>

      </div>

      <div className="card">
        <h2>Update Profile</h2>
        <form onSubmit={handleUpdate}>
          Username: <input value={username} onChange={(e) => setUsername(e.target.value)}/>
          Password:<input value={password} onChange={(e) => setPassword(e.target.value)}/>
          <h1>Profile</h1>
          <div className="profile-form">
            Age: <input type="number" value={formAge} onChange={e => setAge(e.target.value)}/>
            Birthday: <input type="date"  defaultValue={formBirthday} onChange={e => setBirthday(e.target.value)}/>
            Location: <input value={formLocation} onChange={e => setLocation(e.target.value)}/>
            About <textarea value={formAbout} onChange={e => setAbout(e.target.value)}/>
          </div>
          <button type="submit">Update</button>
        </form>
      </div>
      </>}
    </div>
  )
}
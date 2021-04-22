import React from 'react';
import moment from 'moment';

import Avatar from '../components/Avatar';

import '../styles/Profile.scss';

//profile photo is url for now
const friendPhotoURL01 = 'https://i.imgur.com/AmfgQV1.png';
const friendPhotoURL02 = 'https://i.imgur.com/6FRVdHg.png';

const mockUser = {
  id: 1,
  username: 'buddyGuy',
  password: 'secret',
  createdAt: Date.now(),
  updatedAt: Date.now(),
  photoURL: 'https://i.imgur.com/uvrVHI1.png',
  profile: {
    age: 19,
    birthday: Date.now(),
    location: 'HelloVille',
    about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  friends: [
    0,
    2,
  ],
  private_channels: [
  ],
  public_channels: [
    0,
    1
  ]
}

export default function Profile({ user }) {
  const {age, birthday, location, about} = mockUser.profile;
  const bioinfoString = `${age ? `${age} ||` : ''} ${birthday ? `${moment(birthday).format("MMM Do YY")} ||` : ''} ${location ? location : ''}`;

  return (
    <div id='Profile'>
      <div className='card profile-card'>

        <div className='profile-heading'>
          <div className='profile-heading-left'>
            <Avatar size={100} name={mockUser.username} photoURL={mockUser.photoURL}/>
            <div className='bio'>
              <h1>
                {mockUser.username}
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
    </div>
  )
}
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
    about: 'My friends are great!',
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
  const {age, birthday, location} = mockUser.profile;
  const bioinfoString = `${age ? `${age} ||` : ''} ${birthday ? `${moment(birthday).format("MMM Do YY")} ||` : ''} ${location ? location : ''}`;
  console.log(bioinfoString);

  return (
    <div id='Profile'>
      <div className='card'>
        <div className='profile-heading'>
          <div className='profile-heading-left'>
            <Avatar size={150} name={mockUser.username} photoURL={mockUser.photoURL}/>
            <div className='bio'>
              <h1>
                {mockUser.username}
              </h1>
              <div className='various-info'>
                {bioinfoString}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
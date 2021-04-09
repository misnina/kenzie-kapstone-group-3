const baseURL = 'http://localhost:3000/';

export const getChannelMessages = (access, channelid) => {
  return fetch(baseURL + `channels/${access}/${channelid}/messages`)
  .then(res => res.json())
  .catch(err => console.log(err));
}
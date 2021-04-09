const baseURL = 'http://localhost:3000/';

export const getChannelMessages = (access, channelid) => {
  return fetch(baseURL + `channels/${access}/${channelid}/messages`)
  .then(res => res.json())
  .catch(err => console.log(err));
}

export const postMessage = (access, channelid, userid, text) => {
  return fetch(baseURL + `channels/${access}/${channelid}/messages`, {
    method: 'POST',
    headers: {
       "Content-Type": "application/json",
    },
    body: JSON.stringify({
      author: {
        id: userid
      },
      text
    })
  })
  .then(res => res.json())
  .catch(err => console.log(err));
}
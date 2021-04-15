const baseURL = 'http://localhost:4000/';

export const getChannelMessages = (channelName) => {
  return fetch(baseURL + `${channelName}/messages`)
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

export const deleteMessage = (access, channelid, messageid) => {
  console.log(baseURL + `channels/${access}/${channelid}/messages/${messageid}`);
  return fetch(baseURL + `channels/${access}/${channelid}/messages/${messageid}`, {
    method: 'DELETE',
  })
  .then(res => res.json())
  .catch(err => console.log(err));
}

export const patchMessage = (access, channelid, messageid, text) => {
  return fetch(baseURL + `channels/${access}/${channelid}/messages/${messageid}`, {
    method: 'PATCH',
    body: JSON.stringify({
      text
    })
  })
  .then(res => res.json())
  .catch(err => console.log(err));
}
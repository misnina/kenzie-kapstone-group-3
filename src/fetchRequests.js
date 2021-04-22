const baseURL = 'http://localhost:4000/';

export const getUser = function (authorid) { 
  return fetch(baseURL + `user/${authorid.toString()}`)
  .then(res => {
    return res.json();
})}
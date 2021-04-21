const baseURL = 'http://localhost:4000/';

export const getUser = function (authorid) { 
  console.log('please do the fetch', authorid);
  return fetch(baseURL + `user/${authorid.toString()}`)
  .then(res => {
    console.log(res);
    return res.json();
})}
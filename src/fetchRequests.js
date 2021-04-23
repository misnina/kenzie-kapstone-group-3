const baseURL = 'http://localhost:4000/';

export const getUser = function (authorid) { 
  return fetch(baseURL + `user/${authorid.toString()}`)
  .then(res => {
    return res.json();
})}

export const patchUser = function (user) {
  return fetch(baseURL + `user/${user._id.toString()}`, {
    method: "PATCH",
    headers: {'Content-Type': 'application/json'},
    headers: {'Content-Type': 'application/json'},
  })
  .then(res => {
    return res.json();
  })
}

export const createUser = function (username, password) {
  return fetch(baseURL + `users`, {
    method: "POST",
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      username,
      password
    })
  })
  .then(res => {
    return res.json();
  });
}

export const deleteUser = function (userid) {
  return fetch(baseURL + `user/${userid}`, {
    method: "DELETE",
  })
  .then(res => {
    return res.status;
  })
}
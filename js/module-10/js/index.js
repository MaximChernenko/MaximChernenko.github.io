'use strict';

const apiUrl = 'https://test-users-api.herokuapp.com/users/';
const getAllUsersForm = document.querySelector('.js-get-all-users');
const getUserForm = document.querySelector('.js-get-user');
const addUserForm = document.querySelector('.js-add-user');
const removeUserForm = document.querySelector('.js-remove-user');
const updateUserForm = document.querySelector('.js-update-user');
const result = document.querySelector('.js-result');
const getUserIdInput = document.querySelector('.js-id-input-get-user');
const addUserNameInput = document.querySelector('.js-name-input-add-user');
const addUserAgeInput = document.querySelector('.js-age-input-add-user');
const removeUserIdInput = document.querySelector('.js-id-input-remove-user');
const updateUserIdInput = document.querySelector('.js-id-input-update-user');
const updateUserNameInput = document.querySelector('.js-name-input-update-user');
const updateUserAgeInput = document.querySelector('.js-age-input-update-user');

getAllUsersForm.addEventListener('submit', onGetAllUsers);
getUserForm.addEventListener('submit', onGetUserById);
addUserForm.addEventListener('submit', onAddUser);
removeUserForm.addEventListener('submit', onRemoveUser);
updateUserForm.addEventListener('submit', onUpdateUser);

function onGetAllUsers(e) {
  e.preventDefault();
  resultReset();
  getAllUsers();
}

function onGetUserById(e) {
  e.preventDefault();
  const userID = getUserIdInput.value;
  resultReset();
  getUserById(userID);
  this.reset();
}

function onAddUser(e) {
  e.preventDefault();
  const name = addUserNameInput.value;
  const age = addUserAgeInput.value;
  resultReset();
  addUser(name, age);
  this.reset();
}

function onRemoveUser(e) {
  e.preventDefault();
  const id = removeUserIdInput.value;
  resultReset();
  removeUser(id);
  this.reset();
}

function onUpdateUser(e) {
  e.preventDefault();
  resultReset();
  const id = updateUserIdInput.value;
  const name = updateUserNameInput.value;
  const age = updateUserAgeInput.value;
  const user = { name, age };
  updateUser(id, user);
  this.reset();
}

function getAllUsers() {
  fetchAllUsers()
    .then(users => showUsers(users))
    .catch(error => console.log(error));
}

function fetchAllUsers() {
  return fetch(apiUrl, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })
    .then(response => {
      if (response.ok) return response.json();
      throw new Error(response.statusText);
    })
    .then(content => content.data);
}

function getUserById(id) {
  fetchUserById(id)
    .then(user => showUsers([user]))
    .catch(() => alert('User does not exist'));
}

function fetchUserById(id) {
  return fetch(apiUrl + id, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })
    .then(response => {
      if (response.ok) return response.json();
      throw new Error(response.statusText);
    })
    .then(content => content.data);
}

function addUser(name, age) {
  fetchAddUser(name, age)
    .then(newUser => {
      const id = newUser._id;
      delete newUser._id;
      return {
        id,
        ...newUser
      };
    })
    .then(user => showUsers([user]))
    .catch(error => console.log(error));
}

function fetchAddUser(name, age) {
  return fetch(apiUrl, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, age })
  })
    .then(response => {
      if (response.ok) return response.json();
      throw new Error(response.statusText);
    })
    .then(content => content.data);
}

function removeUser(id) {
  fetchRemoveUser(id)
    .then(user => showUsers([user]))
    .catch(() => alert('User has already been deleted'));
}

function fetchRemoveUser(id) {
  return fetch(apiUrl + id, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.statusText);
    })
    .then(content => content.data);
}

function updateUser(id, user) {
  fetchUpdateUser(id, user)
    .then(user => showUsers([user]))
    .catch(() => alert('User does not exist'));
}

function fetchUpdateUser(id, { name, age }) {
  return fetch(apiUrl + id, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, age })
  })
    .then(response => {
      if (response.ok) return response.json();
      throw new Error(response.statusText);
    })
    .then(content => content.data);
}

function showUsers(users) {
  const table = document.createElement('table');
  const titleRow = createRow({ id: 'ID', name: 'NAME', age: 'AGE' }, true);
  const rows = users.map(user => createRow(user));
  rows.unshift(titleRow);
  table.append(...rows);
  result.appendChild(table);
}

function createRow({ id, name, age }, isTitle) {
  let row;
  if (isTitle) {
    row = document.createElement('th');
  } else {
    row = document.createElement('tr');
  }
  const tdId = document.createElement('td');
  tdId.textContent = id;
  const tdName = document.createElement('td');
  tdName.textContent = name;
  const tdAge = document.createElement('td');
  tdAge.textContent = age;
  row.append(tdId, tdName, tdAge);
  return row;
}

function resultReset() {
  result.textContent = '';
}

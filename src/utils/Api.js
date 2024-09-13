const baseUrl = "http://localhost:3001";
const checkServerResponce = (res) => {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Error: ${res.status}`);
  }
};

function getItems() {
  return fetch(`${baseUrl}/items`).then(checkServerResponce);
}

function deleteItem(id, token) {
  return fetch(`${baseUrl}/items/${id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then(checkServerResponce);
}

function addItem({ name, imageUrl, weather }, token) {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ name, weather, imageUrl }),
  }).then(checkServerResponce);
}

function getCurrentUser(token) {
  return fetch(`${baseUrl}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then(checkServerResponce);
}

function updateCurrentUser(data, token) {
  return fetch(`${baseUrl}/users/me`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      name: data.username,
      avatarUrl: data.avatarUrl,
    }).then(checkServerResponce),
  });
}

export {
  getItems,
  addItem,
  deleteItem,
  checkServerResponce,
  updateCurrentUser,
  getCurrentUser,
};

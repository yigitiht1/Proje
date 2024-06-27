let users = [
  { id: 1, email: 'user1@example.com', password: 'password1'},
  { id: 2, email: 'user2@example.com', password: 'password2'},
  { id: 3, email: 'user3@example.com', password: 'password3'},
];

export const getUsers = () => {
  return users;
};

export const addUser = (email, password) => {
  const newUser = {
    id: users.length + 1,
    email: email,
    password: password,
    photo: '',
  };
  users.push(newUser);
};

export const deleteUser = (id) => {
  users = users.filter(user => user.id !== id);
};

export const updateUser = (id, email, password) => {
  const index = users.findIndex(user => user.id === id);
  if (index !== -1) {
    users[index] = { ...users[index], email: email, password: password};
  } else {
    throw new Error(`Kullanıcı bulunamadı: ${id}`);
  }
};

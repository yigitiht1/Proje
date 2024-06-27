import React, { useState, useEffect } from 'react';
import { getUsers, addUser as addUserToStorage, updateUser as updateUserInStorage, deleteUser as deleteUserFromStorage } from './Json.jsx';
import "./Veri.css";

const VeriEkleSil = () => {
  const [userList, setUserList] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [editingUser, setEditingUser] = useState(null); 

  useEffect(() => {
    setUserList(getUsers());
  }, []);

  const addUser = (e) => {
    e.preventDefault();
    addUserToStorage(email, password);
    setUserList(getUsers());
    setEmail('');
    setPassword('');
  };

  const deleteUser = (id) => {
    deleteUserFromStorage(id);
    setUserList(getUsers());
  };

  const editUser = (user) => {
    setEditingUser(user);
    setEmail(user.email);
    setPassword(user.password);
  };

  const updateUser = (e) => {
    e.preventDefault();
    updateUserInStorage(editingUser.id, email, password);
    setUserList(getUsers());
    setEditingUser(null); 
    setEmail('');
    setPassword('');
  };

  return (
    <div className='body'>
      <div className="App">
        <h1>Şimdi Katıl</h1>
        <form onSubmit={editingUser ? updateUser : addUser}>
          <input className='button2'
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-posta"
            required
          />
          <input className='button2'
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Şifre"
            required
          />
          <button className="button2" type="submit">{editingUser ? 'Kullanıcıyı Güncelle' : 'Kullanıcı Ekle'}</button>
        </form>
        <ul>
          {userList.map((user) => (
            <li key={user.id}>
              {user.email} - {user.password}{' '}
              <button  className="button" onClick={() => editUser(user)}>Düzenle</button>
              <button  className="button" onClick={() => deleteUser(user.id)}>Sil</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default VeriEkleSil;

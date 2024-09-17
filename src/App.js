import React, {useEffect, useState} from "react";
import UserForm from "./UserForm";
import UserList from "./UserList";

import './App.css'
import storage from "./storage";

function App() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  const addUser = (user) => {
    const newData = [...users, user]
    storage.save(newData)
    setUsers(newData);
  };

  const deleteUser = (id) => {
    const data= users.filter((user) => user.id !== id)
    storage.save(data)
    setUsers(data);
  };

  const editUser = (id) => {
    const user = users.find((user) => user.id === id);
    setEditingUser(user);
  };

  const updateUser = (updatedUser) => {
    const dataUpdated  = users.map((user) => (user.id === updatedUser.id ? updatedUser : user))
    storage.save(dataUpdated)
    setUsers(dataUpdated);
    setEditingUser(null);
  };

  useEffect(() => {
    console.log('>>',storage.getUserList())
    setUsers(storage.getUserList());
  }, [])

  return (
      <div className="app-container">
        <div className="App">
          <h1 style={{padding: 24}}>Mini Project 1</h1>
          <UserForm addUser={addUser} editingUser={editingUser} updateUser={updateUser}/>
          <UserList users={users} deleteUser={deleteUser} editUser={editUser}/>
        </div>
      </div>
  );
}

export default App;

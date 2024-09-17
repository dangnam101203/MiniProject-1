import React, { useState, useEffect } from "react";

const UserForm = ({ addUser, editingUser, updateUser }) => {
  const [user, setUser] = useState({ id: null, name: "", email: "" });

  useEffect(() => {
    if (editingUser) {
      setUser(editingUser);
    } else {
      setUser({ id: null, name: "", email: "" });
    }
  }, [editingUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.name && user.email) {
      if (editingUser) {
        updateUser(user);
      } else {
        addUser({ ...user, id: Date.now() });
      }
      setUser({ id: null, name: "", email: "" });
    }
  };

  return (
    <form className="form-wrapper" onSubmit={handleSubmit}>
      <input
        className="input"
        type="text"
        placeholder="Name"
        value={user.name}
        onChange={(e) => setUser({ ...user, name: e.target.value })}
      />
      <input
        className="input"
        type="email"
        placeholder="Email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />
      <button className="btn-submit" type="submit">{editingUser ? "Cập nhật" : "Thêm"}</button>
    </form>
  );
};

export default UserForm;

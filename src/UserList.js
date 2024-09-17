import React from "react";

const UserList = ({ users, deleteUser, editUser }) => {
  return (
    <div className="list-container">
      <h2>Danh sách</h2>
      {users.length > 0 ? (
        users.map((user) => (
          <div key={user.id} className="user-info-wrapper">
              <div className="user-info">
                  <span>{user.name} - {user.email}</span>
              </div>
              <button className="btn btn-edit" onClick={() => editUser(user.id)}>Sửa</button>
            <button className="btn btn-delete" onClick={() => deleteUser(user.id)}>Xóa</button>
          </div>
        ))
      ) : (
        <p>Chưa có thông tin</p>
      )}
    </div>
  );
};

export default UserList;

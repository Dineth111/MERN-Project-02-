import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './user.css';
import AddUserForm from './AddUserForm';

const User = () => {
  const [users, setUsers] = useState([
    { Name: "Dineth", Email: "Dineth@gmail.com", Age: 22 }
  ]);

  const handleAddUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  return (
    <div className="user-data">
      <AddUserForm onAddUser={handleAddUser} />
      <div className="user-table">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.Name}</td>
                <td>{user.Email}</td>
                <td>{user.Age}</td>
                <td>
                  <button className="btn btn-primary mr-2">Edit</button>
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default User;

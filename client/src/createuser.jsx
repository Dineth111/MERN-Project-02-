import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CreateUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newUser = { name, email, age };
    console.log("User added:", newUser);
    // Add logic to send newUser to backend or update state
    setName('');
    setEmail('');
    setAge('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="p-3">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            className="form-control"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">Add User</button>
      </form>
    </div>
  );
}

export default CreateUser;

import './styles.css';
import React, { useState } from 'react';

export const User = ({ i, name, age, setUsers }) => {
  const changeUserName = (newNameLetter) => {
    if (newNameLetter === '') return;
    setUsers((prevUsers) => {
      const certainUser = { ...prevUsers[i] };
      certainUser.name = newNameLetter;
      prevUsers.splice(i, 1, certainUser);
      return [...prevUsers];
    });
  };
  return (
    <div>
      {' '}
      {i + 1}user: {name} is {age} old but prefers to be named:{' '}
      {name && (
        <input type="text" onChange={(e) => changeUserName(e.target.value)} />
      )}{' '}
    </div>
  );
};
export const Users = () => {
  const [users, setUsers] = useState([
    { name: 'Lukas', age: 9999 },
    { name: 'Lukas', age: 2 },
  ]);
  return users.map((user, index) => (
    <User
      key={index}
      i={index}
      age={user.age}
      name={user.name}
      setUsers={setUsers}
    />
  ));
};
export const Exercise = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column ' }}>
      {' '}
      <Users />{' '}
    </div>
  );
};

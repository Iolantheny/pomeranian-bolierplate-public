import './styles.css';
import React, { useState } from 'react';

export const UsersList = () => {
  const [inputValue, setInputValue] = useState('');
  const [usersList, setUsersList] = useState([]);

  const changeInputValue = (e) => {
    setInputValue(e.target.value);
  };

  const AddNewUser = () => {
    setUsersList((prev) => [...prev, inputValue]);
    setInputValue('');
  };

  const removeUser = (user) => {
    setUsersList(usersList.filter((element) => element !== user));
  };

  return (
    <div className="userslist">
      <div className="userslist-adduser">
        <div className="userslist-adduser-content">
          <p>NICK</p>
          <input
            type="text"
            placeholder="jaras_2000"
            value={inputValue}
            onChange={changeInputValue}
          />
        </div>
        <button onClick={AddNewUser} disabled={!inputValue}>
          DODAJ
        </button>
      </div>
      <div className="userslist-list">
        {usersList.map((user, index) => {
          return (
            <div key={index}>
              <p>{user}</p>
              <button onClick={() => removeUser(user)}>X</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

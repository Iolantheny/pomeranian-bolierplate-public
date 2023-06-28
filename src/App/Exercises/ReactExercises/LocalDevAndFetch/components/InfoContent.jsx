import React from 'react';

export const InfoContent = ({ text, label, onClick }) => {
  return (
    <div className="todoslist-content">
      <p>{text}</p>
      <button onClick={onClick} className="todoslist-button">
        {label}
      </button>
    </div>
  );
};

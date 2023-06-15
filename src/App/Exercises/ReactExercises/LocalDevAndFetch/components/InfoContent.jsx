import React from 'react';

export const InfoContent = ({ text }) => {
  return (
    <div className="todoslist-content">
      <p>{text}</p>
      <button
        onClick={() => window.location.reload(false)}
        className="todoslist-button"
      >
        ODŚWIEŻ WIDOK
      </button>
    </div>
  );
};

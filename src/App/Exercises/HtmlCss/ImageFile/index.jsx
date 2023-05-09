import React from 'react';
import './styles.css';

export const ImageFile = () => {
  return (
    <div>
      <img
        src="/images/pexels-ivan-samkov-8084656.jpg"
        alt="nice drink"
        with="200px"
        height="400px"
      />
      <div className="background-image" />
    </div>
  );
};

import React from 'react';
import { Link } from 'react-router-dom';
import { Data } from './data';
import { Question } from './components/Question';
import './styles.css';

export const FAQ = () => {
  return (
    <div className="faq">
      <h1>
        <Link to="/">{`< FAQ`}</Link>
      </h1>
      <div>
        <p className="faq_p">
          tutaj znajdź odpowiedzi na najczęściej zadawane pytania.
        </p>
        <div>
          {Data.map((item) => {
            return (
              <Question
                key={item.id}
                question={item.Question}
                answer={item.Answer}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { ArrowToBottom } from '../../Components/Icons/ArrowToBottom';
import { ArrowToRight } from '../../Components/Icons/ArrowToRight';

export const Question = ({ question, answer }) => {
  const [expand, setExpand] = useState(false);

  return (
    <div className="question_wrapper">
      <button onClick={() => setExpand(!expand)}>
        {expand ? <ArrowToBottom /> : <ArrowToRight />}
        {question}
      </button>
      {expand && <p>{answer}</p>}
    </div>
  );
};

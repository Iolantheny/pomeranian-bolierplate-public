import React from 'react';
import { BinIcon } from '../../../../Components/Icons/BinIcon';

const parseDate = (date) => {
  const newDate = new Date(date);
  return newDate.toDateString();
};

export const Task = ({
  id,
  title,
  createdAt,
  doneDate,
  author,
  isDone,
  note,
  deleteTask,
  markAsDone,
}) => {
  return (
    <div className={`task ${isDone ? 'task-done' : ''}`}>
      <p className="task-title">{title}</p>
      <p className="task-info">{author}</p>
      <p className="task-info">{parseDate(createdAt)}</p>
      <p className="task-note">{note}</p>
      {!isDone && (
        <div className="task-notdone">
          <p className="task-notchecked-symbol" onClick={() => markAsDone(id)}>
            ✔
          </p>
          <div onClick={() => deleteTask(id)}>
            <BinIcon />
          </div>
        </div>
      )}
      {isDone && (
        <>
          <div onClick={() => deleteTask(id)}>
            <BinIcon className="task-checked-bin" />
          </div>
          <div className="task-checked">
            <p className="task-checked-symbol">✔</p>
            <p className="task-info">{parseDate(doneDate)}</p>
          </div>
        </>
      )}
    </div>
  );
};

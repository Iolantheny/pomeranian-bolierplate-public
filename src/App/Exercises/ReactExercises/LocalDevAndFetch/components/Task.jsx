import React from 'react';
import { BinIcon } from '../../../../Components/Icons/BinIcon';
import { PencilIcon } from '../../../../Components/Icons/PencilIcon';

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
  showEditForm,
  taskError,
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
          <div onClick={() => showEditForm(id, title, note)}>
            <PencilIcon />
          </div>
          <div onClick={() => deleteTask(id)}>
            <BinIcon />
          </div>
          {taskError && taskError.id === id && (
            <p className="task-notdone-error">
              Przepraszamy błąd wykonania akcji
            </p>
          )}
        </div>
      )}
      {isDone && (
        <>
          <div className="task-checked-icons">
            <div onClick={() => showEditForm(id, title, note)}>
              <PencilIcon className="task-checked-bin" />
            </div>
            <div onClick={() => deleteTask(id)}>
              <BinIcon className="task-checked-bin" />
            </div>
            {taskError && taskError.id === id && (
              <p className="task-notdone-error">
                Przepraszamy błąd wykonania akcji
              </p>
            )}
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

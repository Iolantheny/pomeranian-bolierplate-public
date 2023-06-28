import React, { useState } from 'react';

export const EditForm = ({ setShowEdit, toEdit, updateTask, formError }) => {
  const [newTitle, setNewTitle] = useState(toEdit.title);
  const [newNote, setNewNote] = useState(toEdit.note);

  return (
    <>
      <p className="todoslist-info">Edycja zadania.</p>
      <form className="todolist-form">
        <p>Tytuł </p>
        <input
          type="text"
          placeholder={toEdit.title}
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />

        <p>Treść</p>
        <textarea
          placeholder={toEdit.note}
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
        />
        {formError && (
          <p className="todolist-form-error">
            Wystąpił błąd, spróbuj ponownie.
          </p>
        )}
        <div>
          <button
            className="todolist-form-back"
            onClick={() => setShowEdit(false)}
          >
            COFNIJ
          </button>
          <button
            className="todolist-form-add"
            onClick={() => updateTask(toEdit.id, newTitle, newNote)}
          >
            ZAPISZ
          </button>
        </div>
      </form>
    </>
  );
};

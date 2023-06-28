import React, { useState } from 'react';

export const AddTaskForm = ({ setShowForm, addTask, formError }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [note, setNote] = useState('');

  return (
    <>
      <p className="todoslist-info">Dodawanie zadania.</p>
      <form className="todolist-form">
        <p>Tytuł </p>
        <input
          type="text"
          placeholder="Kupić parasol na balkon"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <p>Autor </p>
        <input
          type="text"
          placeholder="Wojtek"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />

        <p>Treść</p>
        <textarea
          placeholder="Zmierzyć ile mamy miejsca na balkonie od barierki do kanapy i ile musi mieć max średnicy - miarka!!"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
        {formError && (
          <p className="todolist-form-error">
            Wystąpił błąd, spróbuj ponownie.
          </p>
        )}
        <div>
          <button
            className="todolist-form-back"
            onClick={() => setShowForm(false)}
          >
            COFNIJ
          </button>
          <button
            className="todolist-form-add"
            onClick={() => addTask(title, author, note)}
          >
            DODAJ
          </button>
        </div>
      </form>
    </>
  );
};

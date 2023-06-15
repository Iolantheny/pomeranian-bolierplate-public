import React from 'react';

export const AddTaskForm = ({ setShowForm }) => {
  return (
    <>
      <p className="todoslist-info">Dodawanie zadania.</p>
      <form className="todolist-form">
        <p>Tytuł </p>
        <input type="text" placeholder="Kupić parasol na balkon" />

        <p>Autor </p>
        <input type="text" placeholder="Wojtek" />

        <p>Treść</p>
        <textarea placeholder="Zmierzyć ile mamy miejsca na balkonie od barierki do kanapy i ile musi mieć max średnicy - miarka!!" />
        <div>
          <button
            className="todolist-form-back"
            onClick={() => setShowForm(false)}
          >
            COFNIJ
          </button>
          <button className="todolist-form-add">DODAJ</button>
        </div>
      </form>
    </>
  );
};

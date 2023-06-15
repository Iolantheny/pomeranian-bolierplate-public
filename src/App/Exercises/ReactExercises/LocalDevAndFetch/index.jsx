import React, { useEffect, useState } from 'react';
import './styles.css';
import { Task } from './components/Task';
import { InfoContent } from './components/InfoContent';
import { AddTaskForm } from './components/AddTaskForm';

export const LocalDevAndFetch = () => {
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);

  const getTodosList = async () => {
    const respons = await fetch('http://localhost:3333/api/todo');
    const responsJSON = await respons.json();
    setIsLoading(false);
    if (respons.status === 200) {
      setTodos(responsJSON);
    }

    if (respons.status !== 200 && responsJSON.message) {
      setError(responsJSON.message);
    }
  };

  useEffect(() => {
    getTodosList();
  }, []);

  const deleteTask = async (id) => {
    await fetch(`http://localhost:3333/api/todo/${id}`, { method: 'DELETE' });
  };

  const addTaskForm = () => {
    setShowForm(true);
  };

  const markAsDone = async (id) => {
    await fetch(`http://localhost:3333/api/todo/${id}/markAsDone`, {
      method: 'PUT',
    });
  };

  return (
    <div className="todoslist">
      <h1>TODO</h1>
      {!showForm && (
        <>
          <p className="todoslist-info">Tutaj znajdziesz listę swoich zadań.</p>
          <button className="todoslist-btn-add" onClick={() => addTaskForm()}>
            +
          </button>
        </>
      )}

      {isLoading && <p className="todoslist-loading">Loading...</p>}
      {error && (
        <InfoContent text="Przepraszamy. Nie udało się pobrać listy zadań." />
      )}
      {!error && todos.length !== 0 && !showForm && (
        <>
          {todos.map((task) => {
            return (
              <Task
                key={task.id}
                id={task.id}
                title={task.title}
                createdAt={task.createdAt}
                doneDate={task.doneDate}
                author={task.author}
                isDone={task.isDone}
                note={task.note}
                deleteTask={deleteTask}
                markAsDone={markAsDone}
              />
            );
          })}
          <button className="todoslist-button" onClick={() => addTaskForm()}>
            DODAJ
          </button>
        </>
      )}
      {!error && todos.length === 0 && !isLoading && (
        <InfoContent text="Brawo! Nie masz aktualnie żadnych zadań do zrealizowania." />
      )}
      {showForm && !error && <AddTaskForm setShowForm={setShowForm} />}
    </div>
  );
};

import React, { useEffect, useState } from 'react';
import './styles.css';
import { Task } from './components/Task';
import { InfoContent } from './components/InfoContent';
import { AddTaskForm } from './components/AddTaskForm';
import { EditForm } from './components/EditForm';
import { handleRequest } from './functions/handleRequest';

export const LocalDevAndFetch = () => {
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState();
  const [taskError, setTaskError] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [formError, setFormError] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [toEdit, setToEdit] = useState();

  const getTodosList = async () => {
    setTaskError();
    handleRequest('', 'GET')
      .then((respons) => {
        setTodos(respons);
      })
      .catch((errorMessage) => {
        setError(errorMessage);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getTodosList();
  }, []);

  const deleteTask = async (id) => {
    handleRequest(id, 'DELETE')
      .then(() => {
        getTodosList();
      })
      .catch((errorMessage) => {
        setTaskError({ errorMessage, id });
      });
  };

  const addTaskForm = () => {
    setShowForm(true);
  };

  const showEditForm = (id, title, note) => {
    setShowEdit(true);
    setToEdit({ id: id, title: title, note: note });
  };

  const markAsDone = async (id) => {
    handleRequest(`${id}/markAsDone`, 'PUT')
      .then(() => {
        getTodosList();
      })
      .catch((errorMessage) => {
        setTaskError({ errorMessage, id });
      });
  };

  const addTask = async (title, author, note) => {
    if (!title || !author || !note) {
      setFormError(true);
    } else {
      handleRequest('', 'POST', { title, note, author })
        .then(() => {
          getTodosList();
        })
        .catch(() => {
          setFormError(true);
        });
    }
  };

  const updateTask = async (id, newTitle, newNote) => {
    handleRequest(id, 'PUT', { title: newTitle, note: newNote })
      .then(() => {
        getTodosList();
      })
      .catch(() => {
        setFormError(true);
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
        <InfoContent
          text="Przepraszamy. Nie udało się pobrać listy zadań."
          label="ODŚWIEŻ WIDOK"
          onClick={() => window.location.reload(false)}
        />
      )}
      {!error && todos.length !== 0 && !showForm && !showEdit && (
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
                showEditForm={showEditForm}
                taskError={taskError}
              />
            );
          })}
          <button className="todoslist-button" onClick={() => addTaskForm()}>
            DODAJ
          </button>
        </>
      )}
      {!error && todos.length === 0 && !isLoading && !showForm && (
        <InfoContent
          text="Brawo! Nie masz aktualnie żadnych zadań do zrealizowania."
          label="DODAJ ZADANIE"
          onClick={addTaskForm}
        />
      )}
      {showForm && !error && (
        <AddTaskForm
          setShowForm={setShowForm}
          addTask={addTask}
          formError={formError}
        />
      )}
      {showEdit && !error && (
        <EditForm
          setShowEdit={setShowEdit}
          toEdit={toEdit}
          updateTask={updateTask}
          formError={formError}
        />
      )}
    </div>
  );
};

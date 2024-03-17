import React, { useState, useEffect } from 'react';
import TodoDataService from '../../api/todo/TodoDataService.js';
import AuthenticationService from './AuthenticationService.js';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';

const TodoComponent = () => {
  const [todos, setTodos] = useState([]);
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    refreshTodo();
  }, []);

  const refreshTodo = () => {
    const username = AuthenticationService.GetLoggedInUser();
    TodoDataService.retrieveAllTodos(username).then((response) => {
      console.log(response);
      setTodos(response.data);
    });
  };

  const deleteTodoClicked = (id) => {
    const username = AuthenticationService.GetLoggedInUser();
    console.log(id + ' ' + username);
    TodoDataService.deleteTodo(username, id).then((response) => {
      setMessage(`Delete of todo ${id} is successful`);
      refreshTodo();
    });
  };

  const updateTodoClicked = (id) => {
    navigate(`/todo/${id}`);
  };

  return (
    <div>
      <h1>Todo's list</h1>
      {message && <div className='alert alert-success'>{message}</div>}
      <div className='container'>
        <table className='table'>
          <thead>
            <tr>
              <th>id</th>
              <th>description</th>
              <th>Target Date</th>
              <th>Is Completed?</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.description}</td>
                <td>{moment(todo.targetDate).format('YYYY-MM-DD')}</td>
                <td>{todo.isDone.toString()}</td>
                <td>
                  <button className='btn btn-success' onClick={() => updateTodoClicked(todo.id)}>
                    Update
                  </button>
                </td>
                <td>
                  <button className='btn btn-warning' onClick={() => deleteTodoClicked(todo.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TodoComponent;

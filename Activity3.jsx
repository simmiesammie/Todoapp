import React, { useState } from 'react';
import './App.css';
function Todoapp() {
  const [todos, setTodos] = useState([]);
  const [Todo, setNewTodo] = useState('');
  const addTodo = () => {
    if (Todo.trim() !== '') {
      setTodos([...todos, { text: Todo, completed: false }]);
      setNewTodo('');
    }
  };
  const deleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };
  const toggleCompletion = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };
  return (
    <div className="App">
      <h1>To-Do App</h1>
      <div>
        <input
          type="text"
          value={Todo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Enter your to-do"
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleCompletion(index)}
            />
            <span className={todo.completed ? 'completed' : ''}>{todo.text}</span>
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Todoapp;

import React from 'react';
import './App.css';
import AddTodoItem from './components/AddTodoItem';
import TodoComponent from './components/TodoComponent';
function App() {  
  return (
    <div className="App">
      <div className="wrapper">
        <div className="card">
          <TodoComponent />
        </div>
        <div className="card">
          <AddTodoItem />
        </div>
      </div>
    </div>
  );
}

export default App;

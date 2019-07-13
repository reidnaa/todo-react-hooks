import React, { useState }  from 'react';
import './App.css';

function Todo({todo, index, completeTodo , removeTodo}) {
  return(
    <div style={{textDecoration:todo.isCompleted ? 'line-through' : '', backgroundColor: todo.isCompleted ? '#ddd': ''}} className="todo" >
      {todo.text}

      <div>
        <button onClick={() => completeTodo(index)}> Complete</button>
        <button className="remove" onClick={() => removeTodo(index)}>X</button>
      </div>
    </div>
  )
}

function TodoForm({addTodo}){
  const [value, setValue] = useState('');

  const handleSubmit = e =>{
    e.preventDefault();

    if(!value) return;
    addTodo(value);
    setValue('');
  }
  return(
    <form onSubmit={handleSubmit}>
      <input type='text' className="input" value={value} onChange={e => setValue(e.target.value) } placeholder='add todos here'/>
    </form>
  )
}

function App() {const [todos, setTodos] = useState([
  {
    text:'learn about react',
    isComplete: false
  },
  {
    text:'learn about hooks',
    isComplete: false
  },
  {
    text:'build todo app',
    isComplete: false
  }
]);
  
  const addTodo = text => {
    const newTodos = [...todos, {text}];
    setTodos(newTodos);
  }

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  }

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }
  return (
    <div className="App">
      <header>
        <div>Todo App using React Hooks</div>
      </header>
      <div className="todo-list">
        {todos.map((todo, index) =>(
          <Todo key={index} index={index} todo={todo} completeTodo={completeTodo} removeTodo={removeTodo} />
        ))
        }
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;

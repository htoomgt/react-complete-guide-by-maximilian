import {useState} from 'react';
import './App.css';
import NewTodo from './components/NewToDo';
import Todos from './components/Todos';
import Todo from './models/todos';

function App() {
  const [todos, setTodos]  = useState<Todo[]>([]);

  const addTodoHandler = (todoText:string) => {
    let newTodo:Todo = new Todo(todoText);
    setTodos((previousTodos) => {
      return previousTodos.concat(newTodo);
    });
  }

  return (
    <div> 
      <NewTodo onAddTodo={addTodoHandler}/>
      <Todos items={todos}/>
    </div>
  );
}

export default App;

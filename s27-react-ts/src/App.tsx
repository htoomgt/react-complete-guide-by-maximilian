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

  const onRemoveItemHandler = (itemId : string) => {
    setTodos((previousTodos) => {
      return previousTodos.filter(item => item.id !== itemId);
    });
  }

  return (
    <div> 
      <NewTodo onAddTodo={addTodoHandler}/>
      <Todos items={todos} onRemoveItem={onRemoveItemHandler}/>
    </div>
  );
}

export default App;

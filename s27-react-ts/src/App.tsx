import './App.css';
import NewTodo from './components/NewToDo';
import Todos from './components/Todos';
import Todo from './models/todos';

function App() {
  const todos = [
    new Todo('Learn React'),
    new Todo('Learn TypeScript')
  ];

  const addTodoHandler = (todoText:string) => {

  }

  return (
    <div> 
      <NewTodo onAddTodo={addTodoHandler}/>
      <Todos items={todos}/>
    </div>
  );
}

export default App;

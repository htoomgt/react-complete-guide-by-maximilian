import React, {useContext} from "react";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import  styles from './Todos.module.css';
import { TodosContext } from '../store/todos-context';

const Todos: React.FC<{
  
 
}> = (props) => {

  const todosCtx = useContext(TodosContext);

  return (
    <ul className={styles.todos}>
      {todosCtx.items.map(item => {
        
        return <TodoItem 
        key={item.id} item={item} onRemoveItem={todosCtx.removeTodo}/>
      })}   
    </ul>
  );  
}

export default Todos;

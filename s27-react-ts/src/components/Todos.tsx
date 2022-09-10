import React from "react";
import Todo from "../models/todos";
import TodoItem from "./TodoItem";
import  styles from './Todos.module.css';

const Todos: React.FC<{
  items: Todo[],
  onRemoveItem : (itemId : string) => void
}> = (props) => {
  return (
    <ul className={styles.todos}>
      {props.items.map(item => {
        
        return <TodoItem 
        key={item.id} item={item} onRemoveItem={props.onRemoveItem}/>
      })}   
    </ul>
  );  
}

export default Todos;

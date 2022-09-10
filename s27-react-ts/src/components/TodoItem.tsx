import Todo from "../models/todo";
import styles from "./TodoItem.module.css";


const TodoItem: React.FC<{ 
        item : Todo,
        onRemoveItem : (itemId : string) => void
    }> = (props) => {

    

    return <>
        <li className={styles.item}>
         <div> {props.item.text}</div>
         <div 
            className={styles[`btn-remove`]}
            onClick={()=>{ props.onRemoveItem(props.item.id)}}
            > X </div>
         </li>

    </>
        
}
export default TodoItem;
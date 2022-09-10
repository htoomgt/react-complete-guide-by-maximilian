import "./TodoItem.css";

const TodoItem: React.FC<{ text: string}> = (props) => {
    return <li className={`item`}>{props.text}</li>
}

export default TodoItem;
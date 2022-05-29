import {useRef} from 'react';

const NewTodo = () => {
    const todoTextInputRef = useRef<HTMLInputElement>(null);



    const submitHanlder = (event: React.FormEvent) => {
        event.preventDefault();

        const enteredText =  todoTextInputRef.current!.value;


    };


    return  <form onSubmit={submitHanlder} >
        <label htmlFor='text' >Todo text</label>
        <input type="text" id="text" ref={todoTextInputRef} />

        <button>Add Todo</button>
    </form>
}

export default NewTodo;
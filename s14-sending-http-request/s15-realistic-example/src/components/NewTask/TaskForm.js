import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import classes from './TaskForm.module.css';

const TaskForm = (props) => {   

    const taskInputRef  = useRef();

    const submitHandler = (event) =>{
        event.preventDefault();

        const enteredValue = taskInputRef.current.value;

        if(enteredValue.trim().length > 0 ){
            props.onEnterTask(enteredValue);
        }

        taskInputRef.current.value = "";
    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>            
            <input 
                type="text"
                id="task"
                ref={taskInputRef}
                placeholder="new task name"
            />
            <button>{props.loading ? 'Sending...' : 'Add Task'}</button>
        </form>
    )
}

TaskForm.propTypes = {

}

export default TaskForm

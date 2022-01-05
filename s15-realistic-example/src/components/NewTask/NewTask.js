import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Section from '../UI/Section';
import TaskForm from './TaskForm';
import useHttp from '../../hooks/use-http';

const NewTask = (props) => {
    let {sendRequest:sendTaskRequest, isLoading , error} = useHttp();

    let createTask = (taskText, taskData) => {
        const generatedId = taskData.name;
        const createdTask = { id : generatedId, text : taskText}
        

        props.onAddTask(createdTask);
    }

    

    const enterTaskHandler = async (taskText) => {
        

        
            

            sendTaskRequest({
                url: 'https://react-http-tutorial-backend-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: { text: taskText },
            }, createTask.bind(null, taskText));        
            

            
            


        

        
    }


    return (
        <Section>            
            <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
            {error && <p>{error}</p>}
        </Section>
    )
}

NewTask.propTypes = {

}

export default NewTask

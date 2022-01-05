import React, { useState, useEffect} from 'react';
import NewTask from './components/NewTask/NewTask';
import Tasks from './components/Tasks/Tasks';
import useHttp from './hooks/use-http';

function App() {
  
  let [tasks, setTasks] = useState([]);

  let transformTasks = (tasks) => {

    let loadedTasks = [];
    for(const taskKey in tasks){
      loadedTasks.push({
        id : taskKey,
        text : tasks[taskKey].text
      });

    }
    setTasks(loadedTasks);
  }

  
  
  let {isLoading, error,  sendRequest:fetchTasks} = useHttp();




  let addTaskHandler =  (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  }

  useEffect(() => {   
    


    fetchTasks(
      { 
        url : 'https://react-http-tutorial-backend-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json',
        method : 'GET',
        data : {}
      },
      transformTasks
    );
  } , [fetchTasks]);


  
  return (
    
    <React.Fragment>
      <NewTask 
        onAddTask={addTaskHandler}
      />
      <Tasks 
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;

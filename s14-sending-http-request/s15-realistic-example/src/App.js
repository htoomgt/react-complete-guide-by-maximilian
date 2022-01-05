import React, { useState, useEffect} from 'react';
import NewTask from './components/NewTask/NewTask';
import Tasks from './components/Tasks/Tasks';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    setIsLoading(true);
    setError(null);
    try{
      const response = await fetch(
        'https://react-http-tutorial-backend-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json'
      );

      if (!response.ok) {
        throw new Error('Request failed!');
      }

      let data = await response.json();

      const loadedTasks = [];

      for(const taskKey in data){
        loadedTasks.push({
          id : taskKey,
          text : data[taskKey].text
        });

      }

      console.log(loadedTasks);

      setTasks(loadedTasks);
      
    }catch(err){
      setError(err.message || 'Something went wrong!');
    }

    setIsLoading(false);

    
  }

  useEffect(() => {
    fetchTasks();
  }, []);


  let addTaskHandler =  (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  }


  
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

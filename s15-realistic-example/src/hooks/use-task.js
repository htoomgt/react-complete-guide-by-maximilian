import React, {useState, useEffect} from 'react';

const useTask = () => { 
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
  
        // console.log(loadedTasks);
  
        setTasks(loadedTasks);
        
      }catch(err){
        setError(err.message || 'Something went wrong!');
      }
  
      setIsLoading(false);
  
      
    }
  
    useEffect(() => {
      fetchTasks();
    }, []);

    return {isLoading, error, tasks, fetchTasks};
    
    
}

export default useTask;
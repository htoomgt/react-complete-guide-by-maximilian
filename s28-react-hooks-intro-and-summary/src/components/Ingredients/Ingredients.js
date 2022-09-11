import React, {useReducer, useState, useEffect, useCallback} from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';
import ErrorModal from '../UI/ErrorModal';

const ingredientReducer = (currentIngredients, action) => {
  switch (action.type) {
    case "SET":
      return action.ingredients;
    case "ADD":
      return [...currentIngredients, action.ingredient]
    case "DELETE":
      return currentIngredients.filter(ing => ing.id !== action.id);
    default:
      throw new Error("Should not get there")
  }
}


const Ingredients = (props) => {
  const [userIngredients, dispatch] = useReducer(ingredientReducer, []);
  // const [ingredients, setIngredients] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);


  

  const addIngredientHandler = (ingredient) => {
    setIsLoading(true);
    fetch('https://react-hooks-update-udemy-ceedb-default-rtdb.asia-southeast1.firebasedatabase.app/ingredients.json', {
      method : 'POST',
      body : JSON.stringify(ingredient),
      headers : { 'Content-Type' : 'application/json' }
    })
    .then(response => {
      // console.log(response);
      setIsLoading(false);
      return response.json();
    })
    .then(responseData => {
      
      dispatch({type : "ADD", ingredient : { id: responseData.name, ...ingredient }})
    })
    
    
  }

  const onRemoveHandler = (id) => {
    setIsLoading(true);
    fetch(`https://react-hooks-update-udemy-ceedb-default-rtdb.asia-southeast1.firebasedatabase.app/ingredients/${id}/.json`, {
      method : 'DELETE',      
    })
    .then((response) => {
      // setIngredients( (preIngredients) => {
      //   return preIngredients.filter( item =>  item.id !== id)
      // });  
      dispatch({ type : "DELETE", id : id})
    })
    .catch((error) => {
      setError('Something went wrong! ' + error.message)
    })
    .finally(() => setIsLoading(false))

    
    
  }

  useEffect(() => {
    console.log("RENDERING INGREDIENTS", userIngredients);
  })

  useEffect(() => {
    console.log(userIngredients);
  },[userIngredients])

  const filterIngredientHandler = useCallback(filterIngredients => {
    // setIngredients(filterIngredients);
    dispatch({type : 'SET', ingredients : filterIngredients })
  }, [])
  
  
  let closeError = () => {
    setError(null);
    setIsLoading(null);
  }


  return (
    <div className="App">
      {error && <ErrorModal onClose={closeError}> {error}</ErrorModal>}
      <IngredientForm onSubmitForm={addIngredientHandler} loading={isLoading}/>

      <section>
        <Search onLoadingIngredients={filterIngredientHandler} setIsLoading={setIsLoading}/>
        {/* Need to add list here! */}
        <IngredientList ingredients={userIngredients} onRemoveItem={onRemoveHandler} />
      </section>
    </div>
  );
}

export default Ingredients;
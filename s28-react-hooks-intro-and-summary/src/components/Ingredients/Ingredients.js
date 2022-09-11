import React, {useReducer, useEffect, useCallback} from 'react';

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

const httpReducer = (curHttpState, action) => {
  switch(action.type){
    case "SEND":
      return {loading: true, error : null}
    case "RESPONSE":
      return {loading: false, error : null}
    case "ERROR":
      return {...curHttpState, loading: false, error : action.errorMessage}
    case "RESET":
      return {loading: false, error : null}
    default :
      throw new Error("Something went wrong");
  }
}


const Ingredients = (props) => {
  const [userIngredients, dispatch] = useReducer(ingredientReducer, []);
  const [httpState, dispatchHttp] = useReducer(httpReducer, {loading: false, error : null})
  

  

  const addIngredientHandler = (ingredient) => {
    dispatchHttp({type: "SEND"})
    fetch('https://react-hooks-update-udemy-ceedb-default-rtdb.asia-southeast1.firebasedatabase.app/ingredients.json', {
      method : 'POST',
      body : JSON.stringify(ingredient),
      headers : { 'Content-Type' : 'application/json' }
    })
    .then(response => {
      
      dispatchHttp({type: "RESPONSE"})
      return response.json();
    })
    .then(responseData => {
      
      dispatch({type : "ADD", ingredient : { id: responseData.name, ...ingredient }})
    })
    .catch((error) => {
      dispatchHttp({type: "ERROR", errorMessage : 'Something went wrong! ' + error.message})
    })
    
    
    
  }

  const onRemoveHandler = useCallback((id) => {
    dispatchHttp({type: "SEND"})
    fetch(`https://react-hooks-update-udemy-ceedb-default-rtdb.asia-southeast1.firebasedatabase.app/ingredients/${id}/.json`, {
      method : 'DELETE',      
    })
    .then((response) => {
       
      dispatchHttp({type: "RESPONSE"})
      dispatch({ type : "DELETE", id : id})
    })
    .catch((error) => {
      dispatchHttp({type: "ERROR", errorMessage : 'Something went wrong! ' + error.message})
    })
    .finally()

    
    
  },[]);

  useEffect(() => {
    console.log("RENDERING INGREDIENTS", userIngredients);
  })

  useEffect(() => {
    console.log(userIngredients);
  },[userIngredients])

  const filterIngredientHandler = useCallback(filterIngredients => {
    dispatch({type : 'SET', ingredients : filterIngredients })
  }, [])
  
  
  let closeError = useCallback(() => {
    dispatchHttp({type: "RESET"})
  },[]);


  return (
    <div className="App">
      {httpState.error && <ErrorModal onClose={closeError}> {httpState.error}</ErrorModal>}
      <IngredientForm onSubmitForm={addIngredientHandler} loading={httpState.loading}/>

      <section>
        <Search onLoadingIngredients={filterIngredientHandler} httpDispatcher={useCallback((args) => {dispatchHttp(args)},[])} />
        {/* Need to add list here! */}
        <IngredientList ingredients={userIngredients} onRemoveItem={onRemoveHandler} />
      </section>
    </div>
  );
}

export default Ingredients;
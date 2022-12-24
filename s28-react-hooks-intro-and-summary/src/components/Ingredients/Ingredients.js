import React, {useReducer, useEffect, useCallback, useMemo} from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';
import ErrorModal from '../UI/ErrorModal';
import useHttp from '../../hooks/https';

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
  switch (action.type) {
    case 'SEND':
      return { loading: true, error: null };
    case 'RESPONSE':
      return { ...curHttpState, loading: false };
    case 'ERROR':
      return { loading: false, error: action.errorMessage };
    case 'CLEAR':
      return { ...curHttpState, error: null };
    default:
      throw new Error('Should not be reached!');
  }
};




const Ingredients = (props) => {
  const [userIngredients, dispatch] = useReducer(ingredientReducer, []);
  const [httpState, dispatchHttp] = useReducer(httpReducer, {
    loading : false,
    error : null
  })
  const {
    isLoading,
    data,
    error,
    sendRequest
  } = useHttp();

  
  

  

  const addIngredientHandler = (ingredient) => {
    // dispatchHttp({type: "SEND"})
    // fetch('https://react-hooks-update-udemy-ceedb-default-rtdb.asia-southeast1.firebasedatabase.app/ingredients.json', {
    //   method : 'POST',
    //   body : JSON.stringify(ingredient),
    //   headers : { 'Content-Type' : 'application/json' }
    // })
    // .then(response => {
      
    //   dispatchHttp({type: "RESPONSE"})
    //   return response.json();
    // })
    // .then(responseData => {
      
    //   dispatch({type : "ADD", ingredient : { id: responseData.name, ...ingredient }})
    // })
    // .catch((error) => {
    //   dispatchHttp({type: "ERROR", errorMessage : 'Something went wrong! ' + error.message})
    // })

    sendRequest(
      'https://react-hooks-update-udemy-ceedb-default-rtdb.asia-southeast1.firebasedatabase.app/ingredients.json',
      'POST',
      JSON.stringify(ingredient)
    )
    
    
    
  }

  const onRemoveHandler = useCallback((id) => {
    
    sendRequest(
      `https://react-hooks-update-udemy-ceedb-default-rtdb.asia-southeast1.firebasedatabase.app/ingredients/${id}/.json`,
      'DELETE',
      {}
    )

    
    
  },[sendRequest]);

  useEffect(() => {
    console.log("RENDERING INGREDIENTS", userIngredients);
  },[userIngredients]);

  useEffect(() => {
    console.log(userIngredients);
  },[userIngredients])

  const filterIngredientHandler = useCallback(filterIngredients => {
    dispatch({type : 'SET', ingredients : filterIngredients })
  }, [])
  
  
  let closeError = useCallback(() => {
    dispatchHttp({type: "RESET"})
  },[]);

  const ingredientList =  useMemo(() => {
    return (
      <IngredientList ingredients={userIngredients} onRemoveItem={onRemoveHandler} />
    );
  }, [userIngredients, onRemoveHandler]);


  return (
    <div className="App">
      {error && <ErrorModal onClose={closeError}> {error}</ErrorModal>}
      <IngredientForm onSubmitForm={addIngredientHandler} loading={isLoading}/>

      <section>
        <Search onLoadingIngredients={filterIngredientHandler} httpDispatcher={useCallback((args) => {dispatchHttp(args)},[])} />
        {/* Need to add list here! */}

        {ingredientList}
        
      </section>
    </div>
  );
}

export default Ingredients;
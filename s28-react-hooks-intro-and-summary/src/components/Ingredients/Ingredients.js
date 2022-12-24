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






const Ingredients = (props) => {
  const [userIngredients, dispatch] = useReducer(ingredientReducer, []);
  
  const {
    isLoading,
    data,
    error,
    sendRequest,
    reqExtra,
    reqIdentifier
  } = useHttp();

  
  

  

  const addIngredientHandler = (ingredient) => {
    

    sendRequest(
      'https://react-hooks-update-udemy-ceedb-default-rtdb.asia-southeast1.firebasedatabase.app/ingredients.json',
      'POST',
      JSON.stringify(ingredient),
      ingredient,
      'ADD_INGREDIENT'
    )
    
    
    
  }

  const onRemoveHandler = useCallback((id) => {
    
    sendRequest(
      `https://react-hooks-update-udemy-ceedb-default-rtdb.asia-southeast1.firebasedatabase.app/ingredients/${id}/.json`,
      'DELETE',
      {},
      id,
      'REMOVE_INGREDIENT'
    )

    
    
  },[sendRequest]);

  useEffect(() => {
    console.log(isLoading);
    if(!isLoading && reqIdentifier === "REMOVE_INGREDIENT" ){
      dispatch({ type : "DELETE", id : reqExtra});
    }
    else if(!isLoading && !error && reqIdentifier === 'ADD_INGREDIENT'){
      dispatch({
        type: 'ADD',
        ingredient: { id: data.name, ...reqExtra }
      });
    }
   
    
  },[data, reqExtra, reqIdentifier, isLoading, error]);

  useEffect(() => {
    console.log(userIngredients);
  },[userIngredients])

  const filterIngredientHandler = useCallback(filterIngredients => {
    dispatch({type : 'SET', ingredients : filterIngredients })
  }, [])
  
  
  let closeError = useCallback(() => {
    //dispatchHttp({type: "RESET"})
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
        <Search onLoadingIngredients={filterIngredientHandler}  />
        {/* Need to add list here! */}

        {ingredientList}
        
      </section>
    </div>
  );
}

export default Ingredients;
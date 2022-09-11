import React, {useState, useEffect, useCallback} from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';
import ErrorModal from '../UI/ErrorModal';


const Ingredients = (props) => {
  const [ingredients, setIngredients] = useState([]);
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
      // console.log(responseData)
      setIngredients( (preIngredients) => [
        ...preIngredients, 
        {id : responseData.name, ...ingredient}
      ]);
    })
    
    
  }

  const onRemoveHandler = (id) => {
    setIsLoading(true);
    fetch(`https://react-hooks-update-udemy-ceedb-default-rtdb.asia-southeast1.firebasedatabase.app/ingredients/${id}/.json`, {
      method : 'DELETE',      
    })
    .then((response) => {
      setIngredients( (preIngredients) => {
        return preIngredients.filter( item =>  item.id !== id)
      });  
    })
    .catch((error) => {
      setError('Something went wrong! ' + error.message)
    })
    .finally(() => setIsLoading(false))

    
    
  }

  useEffect(() => {
    console.log("RENDERING INGREDIENTS", ingredients);
  })

  useEffect(() => {
    console.log(ingredients);
  },[ingredients])

  const filterIngredientHandler = useCallback(filterIngredients => {
    setIngredients(filterIngredients);
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
        <IngredientList ingredients={ingredients} onRemoveItem={onRemoveHandler} />
      </section>
    </div>
  );
}

export default Ingredients;
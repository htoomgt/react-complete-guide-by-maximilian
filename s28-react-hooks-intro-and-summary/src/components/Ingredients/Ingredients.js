import React, {useState, useEffect} from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';


const Ingredients = (props) => {
  const [ingredients, setIngredients] = useState([]);

  useEffect(()=>{
    fetch('https://react-hooks-update-udemy-ceedb-default-rtdb.asia-southeast1.firebasedatabase.app/ingredients.json')
    .then(response => response.json())
    .then(responseData => {
      const loadingIngredients = [];
      for(const key in responseData){
        loadingIngredients.push({id : key, title : responseData[key].title, amount : responseData[key].amount})
      }
      setIngredients(loadingIngredients);
    })
  }, [])

  const addIngredientHandler = (ingredient) => {
    fetch('https://react-hooks-update-udemy-ceedb-default-rtdb.asia-southeast1.firebasedatabase.app/ingredients.json', {
      method : 'POST',
      body : JSON.stringify(ingredient),
      headers : { 'Content-Type' : 'application/json' }
    })
    .then(response => {
      // console.log(response);
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
    setIngredients( (preIngredients) => {
      return preIngredients.filter( item =>  item.id !== id)
    });
  }

  useEffect(() => {
    console.log(ingredients);
  },[ingredients])

  return (
    <div className="App">
      <IngredientForm onSubmitForm={addIngredientHandler}/>

      <section>
        <Search />
        {/* Need to add list here! */}
        <IngredientList ingredients={ingredients} onRemoveItem={onRemoveHandler} />
      </section>
    </div>
  );
}

export default Ingredients;
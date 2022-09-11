import React, {useState, useEffect} from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';
import uuid from 'react-uuid';


const Ingredients = (props) => {
  const [ingredients, setIngredients] = useState([]);

  const addIngredientHandler = (ingredient) => {
    setIngredients( (preIngredients) => [
      ...preIngredients, 
      {
        id: uuid().toString(),
        ...ingredient
      }]);
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
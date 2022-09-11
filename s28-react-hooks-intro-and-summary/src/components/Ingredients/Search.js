import React, {useState, useEffect} from 'react';

import Card from '../UI/Card';
import './Search.css';

const Search = React.memo(props => {
  const {onLoadingIngredients} = props;
  const [enteredFilter, setEnteredFilter] = useState("");

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      const query = enteredFilter.length === 0 ? '' : `?orderBy="title"&equalTo="${enteredFilter}"`;

      fetch('https://react-hooks-update-udemy-ceedb-default-rtdb.asia-southeast1.firebasedatabase.app/ingredients.json'+query)
    .then(response => response.json())
    .then(responseData => {
      const loadingIngredients = [];
      for(const key in responseData){
        loadingIngredients.push({id : key, title : responseData[key].title, amount : responseData[key].amount})
      }

      onLoadingIngredients(loadingIngredients);
    })

   

    }, 400);

    return () =>{
      clearTimeout(timeoutId);
    }
  }, [enteredFilter])


  return (
    <section className="search">
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          <input 
            type="text" 
            value={enteredFilter}
            onChange={(e) => setEnteredFilter(e.target.value)}
          />
        </div>
      </Card>
    </section>
  );
});

export default Search;  
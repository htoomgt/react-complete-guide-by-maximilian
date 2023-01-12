import React, { useContext } from 'react';

import FavoritesContext from '../store/favorites-context';
import MeetupList from '../components/meetups/MeetupList';


const FavoritesPage = () => {
  const favoritesCtx = useContext(FavoritesContext);

  let content;


  if(favoritesCtx.totalFavorite === 0){
    content = <p> You got no favorite yet. Start adding some?</p>
  }
  else{
    content =  <MeetupList meetups={favoritesCtx.favorites} />
  }

  console.log(favoritesCtx.favorites.length);

  return (
    <div>
        <h1> Favorites</h1>
        {content}
    </div>
  )
}

export default FavoritesPage
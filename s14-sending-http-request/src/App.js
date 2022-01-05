import React from 'react';
import './App.css';
import MovieList from './components/MovieList';

function App() {
 const [movies, setMovies] = React.useState([]);

  function fetchMovieHandler(){
    fetch('https://swapi.dev/api/films/')
      .then(response => {
        return response.json();
      })
      .then(data => {
        const transFormedMovies = data.results.map(movie => {
          return {
            id : movie.episode_id,
            title: movie.title,
            openingText: movie.opening_crawl,
            releaseDate: movie.release_date
          };
        });

        setMovies(transFormedMovies);
      })
      .catch();
  }

 


  return (
    
    <React.Fragment>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>
        <MovieList movies={movies}/>  
      </section>
    </React.Fragment>
  );
}

export default App;

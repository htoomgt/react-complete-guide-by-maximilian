import React, { useState, useEffect, useCallback } from "react";
import "./App.css";
import AddMovie from "./components/AddMovie";
import MovieList from "./components/MovieList";

function App() {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchMovieHandler = useCallback(async () => {
     
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch("https://react-http-tutorial-backend-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json");
            if (!response.ok) {
                throw new Error("Something went wrong!");
            }
            
            const data = await response.json();
            let loadedMovies = [];

            for(const key in data){
              loadedMovies.push({
                id : key,
                title : data[key].title,
                releaseDate : data[key].releaseDate,
                openingText : data[key].openingText
              });
            }

           

            setMovies(loadedMovies);
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            setError(error.message);
        }
    
    }, []);

    useEffect(() => {
        fetchMovieHandler();
    }, [fetchMovieHandler]);

    const addMovieHandler = async (movie) => {
      const response = await fetch('https://react-http-tutorial-backend-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json', {
        method: 'POST',        
        body : JSON.stringify(movie),
        headers : {
          'Content-Type' : 'application/json'
        }
      });

      console.log(response);
      fetchMovieHandler();

    }

    let content = <h1>Found no Movies or no data to display</h1>;

    if (isLoading) {
        content = <h1>Loading...</h1>;
    }

    if (error) {
        content = <h1>{error}</h1>;
    }

    if (movies.length > 0) {
        content = <MovieList movies={movies} />;
    }

    return (
        <React.Fragment>
            <section>
                <AddMovie onAddMovie={addMovieHandler}/>
            </section>
            <section>
                <button onClick={fetchMovieHandler}>Fetch Movies</button>
            </section>
            <section>{content}</section>
        </React.Fragment>
    );
}

export default App;

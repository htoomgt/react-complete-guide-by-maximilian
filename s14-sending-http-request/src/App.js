import React, { useState, useEffect, useCallback } from "react";
import "./App.css";
import MovieList from "./components/MovieList";

function App() {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchMovieHandler = useCallback(async () => {
     
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch("https://swapi.dev/api/films/");
            if (!response.ok) {
                throw new Error("Something went wrong!");
            }
            const data = await response.json();

            const transFormedMovies = data.results.map((movie) => {
                return {
                    id: movie.episode_id,
                    title: movie.title,
                    openingText: movie.opening_crawl,
                    releaseDate: movie.release_date,
                };
            });

            setMovies(transFormedMovies);
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            setError(error.message);
        }
    
    }, []);

    useEffect(() => {
        fetchMovieHandler();
    }, [fetchMovieHandler]);

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
                <button onClick={fetchMovieHandler}>Fetch Movies</button>
            </section>
            <section>{content}</section>
        </React.Fragment>
    );
}

export default App;

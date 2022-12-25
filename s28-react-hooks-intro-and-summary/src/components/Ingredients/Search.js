import React, { useState, useEffect, useRef } from "react";

import Card from "../UI/Card";
import "./Search.css";
import useHttp from "../../hooks/https";
import ErrorModal from "../UI/ErrorModal";
import LoadingIndicator from "../UI/LoadingIndicator";

const Search = React.memo((props) => {
    const { onLoadingIngredients } = props;
    const [enteredFilter, setEnteredFilter] = useState("");
    const inputRef = useRef();
    const {
        isLoading,
        data,
        error,
        sendRequest,        
        clear
      } = useHttp();

    useEffect(() => {
        
        let timeoutId = setTimeout(() => {
            if (enteredFilter === inputRef.current.value) {
                const query =
                    enteredFilter.length === 0
                        ? ""
                        : `?orderBy="title"&equalTo="${enteredFilter}"`;

                sendRequest(
                    "https://react-hooks-update-udemy-ceedb-default-rtdb.asia-southeast1.firebasedatabase.app/ingredients.json" + query,
                    "GET"
                   
                )
                    
            }

        }, 500);

        return () => {
            clearTimeout(timeoutId);
        };
    }, [sendRequest, enteredFilter]);

    useEffect(() => {
        if(!isLoading &&  !error &&  data){
            const loadingIngredients = [];
            for (const key in data) {
                loadingIngredients.push({
                    id: key,
                    title: data[key].title,
                    amount: data[key].amount,
                });
            }

            onLoadingIngredients(loadingIngredients);
        }

    }, [data, isLoading, error, onLoadingIngredients])

    return (
        <section className="search">

            {error && <ErrorModal onClose={clear}> {error}</ErrorModal>}

            <Card>
                <div className="search-input">
                    <label>Filter by Title</label>
                    {isLoading && <LoadingIndicator /> }  
                    <input
                        type="text"
                        ref={inputRef}
                        value={enteredFilter}
                        onChange={(e) => setEnteredFilter(e.target.value)}
                    />
                </div>
            </Card>
        </section>
    );
});

export default Search;

import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card/Card";
import MealItem from "./MealItem/MealItem";



const AvailableMeals = (props) => {
    const [meals, setMeals] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState(null);

    useEffect(() => {
        let fetchMeals  = async () => {
            let response = await fetch("https://react-http-tutorial-backend-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json");
            
            if(!response.ok) {
                throw new Error('Oops! Something went wrong!');
            }
            

            let data = await response.json();
            let loadedMeals = [];

            for( let key in data){
                loadedMeals.push({
                    id : key,
                    name : data[key].name,
                    description : data[key].description,
                    price : data[key].price,
                })
            }

            setMeals(loadedMeals);
            setIsLoading(false);
        }
        
        fetchMeals().catch((error) =>{
            setIsLoading(false);
            setHttpError(error.message);
        });
        
        


    }, []);


    const mealsList = meals.map((meal) => {
        return <MealItem 
            name={meal.name}
            description={meal.description}
            price={meal.price}
            key={meal.id}
            id={meal.id}
        />;
    });

    if(isLoading){
        return <section className={`${classes.meals}`}>
            <Card><p  className={classes.mealsIsLoading}>Loading...</p></Card>
        </section>
    }

    if(httpError){
        
        return <section className={`${classes.meals}`}>
            <Card>
                <p  className={classes.mealsError}>{httpError}</p>
            </Card>
            

        </section>
    }

    return (
        <section className={`${classes.meals}`}>
            <Card>
                <ul>{mealsList}</ul>
            </Card>
        </section>
    );
};

AvailableMeals.propTypes = {};

export default AvailableMeals;

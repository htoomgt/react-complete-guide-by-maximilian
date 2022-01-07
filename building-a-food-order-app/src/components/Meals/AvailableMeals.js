import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import classess from "./AvailableMeals.module.css";
import Card from "../UI/Card/Card";
import MealItem from "./MealItem/MealItem";



const AvailableMeals = (props) => {
    const [meals, setMeals] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        let fetchMeals  = async () => {
            let response = await fetch("https://react-http-tutorial-backend-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json");
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

        fetchMeals();


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
        return <section className={`${classess.meals}`}>
            <Card><p  className={classess.mealsIsLoading}>Loading...</p></Card>
        </section>
    }

    return (
        <section className={`${classess.meals}`}>
            <Card>
                <ul>{mealsList}</ul>
            </Card>
        </section>
    );
};

AvailableMeals.propTypes = {};

export default AvailableMeals;

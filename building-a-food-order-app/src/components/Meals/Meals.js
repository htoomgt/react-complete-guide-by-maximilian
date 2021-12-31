import React from 'react';
import PropTypes from 'prop-types';
import AvailableMeals from './AvailableMeals';
import MealsSummary from './MealsSummary';


const Meals = props => {
    return (
        <React.Fragment>            
            <MealsSummary />            
            <AvailableMeals />
            

            
        </React.Fragment>
    )
}

Meals.propTypes = {

}

export default Meals

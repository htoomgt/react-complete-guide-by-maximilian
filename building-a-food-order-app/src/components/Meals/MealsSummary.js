import React from 'react';
import PropTypes from 'prop-types';
import classess from './MealsSummary.module.css';

const MealsSummary = props => {
    return (
        <section className={`${classess.summary}`}>
            <h2>Delicious Food, Delivered To Yous</h2>
            <p>
                Choose your favorite meals from our broad selection of available meals
                and enjoy a delicious lunch or dinner at home.
            </p>
            <p>
                All our meals are cooked with high-quality ingredients, just-in-time and 
                of course by experience chefs
            </p>
        </section>
    )
}

MealsSummary.propTypes = {

}

export default MealsSummary

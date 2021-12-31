import React from 'react';
import PropTypes from 'prop-types';
import classes from './Header.module.css';
import mealsImage from '../../assets/images/meals.jpg';

const Header = props => {
    return (
        <React.Fragment>
            <header className={`${classes.header}`}>
                <h1>React Meals</h1>
                <button>Cart</button>
            </header>
            <div className={`${classes['main-image']}`}>
                <img src={mealsImage} alt="A table full of delicious food" />
            </div>      
        </React.Fragment>
    );
}

Header.propTypes = {

}

export default Header

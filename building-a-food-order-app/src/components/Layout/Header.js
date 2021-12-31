import { Fragment } from "react";
import PropTypes from "prop-types";
import classes from "./Header.module.css";
import mealsImage from "../../assets/images/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <div className={classes.headerContainer}>
                    <h1>ReactMeals</h1>
                    <HeaderCartButton 
                        onClick={props.onShowCart}
                    />
                </div>
            </header>
            <div className={classes["main-image"]}>
                <img src={mealsImage} alt="A table full of delicious food!" />
            </div>
        </Fragment>
    );
};

Header.propTypes = {};

export default Header;

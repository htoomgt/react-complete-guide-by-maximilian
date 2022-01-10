import React, {useRef} from "react";
import PropTypes from "prop-types";
import classes from "./Checkout.module.css";

const Checkout = (props) => {
    const nameInputRef = useRef();
    const streetInputRef = useRef();
    const postalInputRef = useRef();
    const cityInputRef = useRef();


    const confirmHandler = (event) => {
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredStreetInput = nameInputRef.current.value;
        const enteredPostalInput = nameInputRef.current.value;
        const enteredCityInput = nameInputRef.current.value;

        


    }   


    return (
        <form className={classes.form} onSubmit={confirmHandler}>
            <div className={classes.control}>
                <label htmlFor="name"> Your Name </label>
                <input type="text" id="name" ref={nameInputRef}/>
            </div>

            <div className={classes.control}>
                <label htmlFor="street"> Street </label>
                <input type="text" id="street" ref={streetInputRef}/>
            </div>

            <div className={classes.control}>
                <label htmlFor="postal"> Postal Code </label>
                <input type="text" id="postal" ref={postalInputRef}/>
            </div>

            <div className={classes.control}>
                <label htmlFor="postal"> City </label>
                <input type="text" id="city" ref={cityInputRef} />
            </div>

            <div className={classes.actions}>
                <button type="button" onClick={props.onCancel}>
                    Cancel
                </button>
                <button className={classes.submit}>Confirm</button>
            </div>
        </form>
    );
};

Checkout.propTypes = {};

export default Checkout;

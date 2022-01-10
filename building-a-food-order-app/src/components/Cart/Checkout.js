import React, {useRef, useState} from "react";
import PropTypes from "prop-types";
import classes from "./Checkout.module.css";

const isEmpty = value => value.trim() === '';
const isFiveChars = value => value.length === 5;




const Checkout = (props) => {
    const [formInputVality, setFormInputVality] = useState({
        name : true,
        street : true,
        city : true,
        postalCode: true
    });


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


        const enteredNameIsValid = !isEmpty(enteredName);
        const enteredStreetIsValid = !isEmpty(enteredStreetInput);
        const enteredPostalIsValid = !isEmpty(enteredPostalInput);
        const enteredCityIsValid = isFiveChars(enteredCityInput);

        setFormInputVality({
            name: enteredNameIsValid,
            street: enteredStreetIsValid,
            city: enteredCityIsValid,
            postalCode : enteredPostalIsValid
        });


        const formIsValid = enteredNameIsValid && enteredStreetIsValid && enteredPostalIsValid && enteredCityIsValid;

        if (formIsValid) {
            // submtit cart form data

        }
            
        



    }   

    const nameControlClasses = `
        ${classes.control}
        ${!formInputVality.name ? classes.invalid : ''}
    `;

    const streetControlClasses = `
        ${classes.control}
        ${!formInputVality.street ? classes.invalid : ''}
    `;

    const postalControlClasses = `
        ${classes.control}
        ${!formInputVality.postalCode ? classes.invalid : ''}
    `;

    const cityControlClasses = `
        ${classes.control}
        ${!formInputVality.city ? classes.invalid : ''}
    `;



    return (
        <form className={classes.form} onSubmit={confirmHandler}>
            <div 
                className={nameControlClasses}
            >
                <label htmlFor="name"> Your Name </label>
                <input type="text" id="name" ref={nameInputRef}/>
                {!formInputVality.name && <p> Please enter a valid name </p>}
            </div>

            <div 
                className={streetControlClasses}            
            >
                <label htmlFor="street"> Street </label>
                <input type="text" id="street" ref={streetInputRef}/>
                {!formInputVality.street && <p> Please enter a valid street </p>}
            </div>

            <div 
                className={postalControlClasses}
            >
                <label htmlFor="postal"> Postal Code </label>
                <input type="text" id="postal" ref={postalInputRef}/>
                {!formInputVality.postalCode && <p> Please enter a valid postal code </p>}
            </div>

            <div 
                className={cityControlClasses}
            >
                <label htmlFor="postal"> City </label>
                <input type="text" id="city" ref={cityInputRef} />
                {!formInputVality.city && <p> Please enter a valid city </p>}
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

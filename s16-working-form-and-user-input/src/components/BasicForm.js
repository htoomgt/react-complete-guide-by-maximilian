import React from "react";
import PropTypes from "prop-types";
import useInput from "../hooks/use-input";
import useInputMultiRules from "../hooks/use-input-muti-rules";

const BasicForm = (props) => {

    const {
        value : enteredFirstName,
        isValid : enteredFirstNameIsValid,
        hasError: firstNameInputHasError, 
        valueChangeHandler: firstNameChangeHandler, 
        inputBlurHandler: firstNameBlurHandler,
        reset : firstNameReset,
        setIsTouched : firstNameIsTouched
    } = useInput((value) => value.trim() !== "");

    const {
        value : enteredLastName,
        isValid : enteredLastNameIsValid,
        hasError: lastNameInputHasError, 
        valueChangeHandler: lastNameChangeHandler, 
        inputBlurHandler: lastNameBlurHandler,
        reset : lastNameReset,
        setIsTouched : lastNameIsTouched
    } = useInput((value) => value.trim() !== "");

    const {
        value : enteredEmailAddress,
        isValid : enteredEmailAddressIsValid,
        hasError: emailAddressInputHasError, 
        valueChangeHandler: emailAddressChangeHandler, 
        inputBlurHandler: emailAddressBlurHandler,
        rulesStatus : enteredEmailAddressRulesStatus, 
        reset : emailAddressReset,
        setIsTouched : emailAddressIsTouched
    } = useInputMultiRules(
            {
               'required' : (value) => value.trim() !== '',
               'emailFormat' : (value) => {
                   return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
               }
            }
        );

        let {required: emailAddressRequiredValid, emailFormat:emailAddressFormatValid} = enteredEmailAddressRulesStatus;


    let formIsValid = false;

    if(enteredFirstNameIsValid && 
        enteredLastNameIsValid &&
        enteredEmailAddressIsValid){
        formIsValid = true;
    }
   

    
    
    const onSubmitHandler = (event) => {
        event.preventDefault();
        
        firstNameIsTouched(true);
        lastNameIsTouched(true);
        emailAddressIsTouched(true);

        if(!formIsValid){
            return;
        }

        console.log(enteredFirstName, enteredLastName, enteredEmailAddress);

        firstNameReset();
        lastNameReset();
        emailAddressReset();

    }

    return (
        <form onSubmit={onSubmitHandler}>
            <div className="control-group">
                <div className={`form-control ${firstNameInputHasError ? "invalid" : ""} `}>
                    <label htmlFor="firstName">First Name</label>
                    <input 
                        type="text" 
                        id="firstName" 
                        onChange={firstNameChangeHandler}
                        onBlur={firstNameBlurHandler}
                        value={enteredFirstName}
                    />
                    {firstNameInputHasError  && (
                        <p className="error-text">First Name must not be empty.</p>
                    )}
                </div>
                <div className={`form-control ${lastNameInputHasError ? "invalid" : ""} `}>
                    <label htmlFor="lastName">Last Name</label>
                    <input 
                        type="text" 
                        id="lastName"
                        onChange={lastNameChangeHandler}
                        onBlur={lastNameBlurHandler}
                        value={enteredLastName} 

                    />
                    {lastNameInputHasError  && (
                        <p className="error-text">Last Name must not be empty.</p>
                    )}
                </div>
            </div>
            <div className={`form-control ${emailAddressInputHasError ? "invalid" : ""} `}>
                <label htmlFor="emailAddress">E-Mail Address</label>
                <input 
                    type="email" 
                    id="emailAddress" 
                    onChange={emailAddressChangeHandler}
                    onBlur={emailAddressBlurHandler}
                    value={enteredEmailAddress}
                />
                {!emailAddressRequiredValid && emailAddressInputHasError && (
                    <p className="error-text">Email Address must not be empty.</p>
                )}
                {!emailAddressFormatValid && emailAddressInputHasError && (
                    <p className="error-text">Email Address must be valid email.</p>
                )}
            </div>
            <div className="form-actions">
                <button>Submit</button>
            </div>
        </form>
    );
};

BasicForm.propTypes = {};

export default BasicForm;

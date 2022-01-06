import { useState, useEffect } from "react";
import useInput from '../hooks/use-input';
import useInputMultiRules from '../hooks/use-input-muti-rules';


const SimpleInput = (props) => {

   
    const {
        value : enteredName, 
        isValid : enteredNameIsValid,
        hasError: nameInputHasError, 
        valueChangeHandler: nameChangeHandler, 
        inputBlurHandler: nameBlurHandler,
        reset : nameReset,
        setIsTouched : nameIsTouched
    } = useInput((value) => value.trim() !== '');

    const {
        value : enteredEmail,
        isValid : enteredEmailIsValid,
        hasError: emailInputHasError, 
        valueChangeHandler: emailChangeHandler, 
        inputBlurHandler: emailBlurHandler,
        rulesStatus : enteredEmailRulesStatus, 
        reset : emailReset,
        setIsTouched : emailIsTouched
    } = useInputMultiRules(
            {
               'required' : (value) => value.trim() !== '',
               'emailFormat' : (value) => {
                   return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
               }
            }
        );

        let {required: emailRequiredValid, emailFormat:emailFormatValid} = enteredEmailRulesStatus;
       






   
    

    //Whole form validity status
    let formIsValid = false;
   
    if(enteredNameIsValid && 
        enteredEmailIsValid 
       ){
        formIsValid = true;
    }

    
    

    
    

    

    

    const formSubmissionHandler = (event) => {
        event.preventDefault();      
        
        nameIsTouched(true);
        emailIsTouched(true);
        
        

        if (!formIsValid) {
            return;
        }

        console.log(enteredName);
        console.log(enteredEmail);

        // nameInputRef.current.value = ''; => NOT IDEAL, DON'T MANIPULATE THE DOM
        nameReset();
        emailReset();
        
        
    };

   
    return (
        <form onSubmit={formSubmissionHandler}>
            <div className={`form-control ${nameInputHasError ? "invalid" : ""}`}>
                <label htmlFor="name">Your Name</label>
                <input
                    type="text"
                    id="name"
                    onChange={nameChangeHandler}
                    onBlur={nameBlurHandler}
                    value={enteredName}
                />
                {nameInputHasError  && (
                    <p className="error-text">Name must not be empty.</p>
                )}
            </div>

            <div className={`form-control ${emailInputHasError ? "invalid" : ""}`}>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    onChange={emailChangeHandler}
                    onBlur={emailBlurHandler}
                    value={enteredEmail}
                />
                {!emailRequiredValid && emailInputHasError && (
                    <p className="error-text">Email must not be empty.</p>
                )}
                {!emailFormatValid && emailInputHasError && (
                    <p className="error-text">Email must be valid email.</p>
                )}
            </div>
            <div className="form-actions">
                <button>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;

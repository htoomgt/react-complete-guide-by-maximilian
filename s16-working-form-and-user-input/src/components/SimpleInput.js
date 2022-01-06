import { useState, useEffect } from "react";

const SimpleInput = (props) => {

    /**State variable block start */
    const [enteredName, setEnteredName] = useState("");
    const [touchedName, setTouchedName] = useState(false);

    const [enteredEmail, setEnteredEmail] = useState("");
    const [touchedEmail, setTouchedEmail] = useState(false);
    /**State variable block end */

    /**Validation variable block start */
    let enteredNameIsValid = false;
    let enteredEmailRequiredValid = false;
    let enteredEmailFormatValid = false;
    /**Validation variable block start */


    /**Validation  block start */
    enteredNameIsValid = enteredName.trim() !== "";
    enteredEmailRequiredValid = enteredEmail.trim() !== "";
    enteredEmailFormatValid = enteredEmailRequiredValid && enteredEmail.includes("@");

    

    //Whole form validity status
    let formIsValid = false;
   
    if(enteredNameIsValid && 
       enteredEmailRequiredValid &&
       enteredEmailFormatValid){
        formIsValid = true;
    }

    /**Validation  block end */
    

    
    /** input change handler for all input  start*/
    const inputChangeHandler = (event) => {
        switch (event.target.id) {
            case "name":
                setEnteredName(event.target.value);
                break;
            case "email":
                setEnteredEmail(event.target.value);
                break; 
            default:
                console.log('no value set')
                break;
        }
        
    };

    /** input change handler for all input end */

    const inputBlurHandler = (event) => {
        

        switch (event.target.id) {
            case "name":
                setTouchedName(true);
                break;
            case "email":
                setTouchedEmail(true);
                break; 
            default:
                console.log('no value set')
                break;
        }
    };

    

    const formSubmissionHandler = (event) => {
        event.preventDefault();

        setTouchedName(true);
        setTouchedEmail(true);
        
    

        if (!formIsValid) {
            return;
        }

        console.log(enteredName);
        console.log(enteredEmail);

        // nameInputRef.current.value = ''; => NOT IDEAL, DON'T MANIPULATE THE DOM
        setEnteredName("");
        setEnteredEmail("");
        
        setTouchedName(false);
        setTouchedEmail(false);
    };

   
    return (
        <form onSubmit={formSubmissionHandler}>
            <div className={`form-control ${!enteredNameIsValid && touchedName ? "invalid" : ""}`}>
                <label htmlFor="name">Your Name</label>
                <input
                    type="text"
                    id="name"
                    onChange={inputChangeHandler}
                    onBlur={inputBlurHandler}
                    value={enteredName}
                />
                {!enteredNameIsValid && touchedName && (
                    <p className="error-text">Name must not be empty.</p>
                )}
            </div>

            <div className={`form-control ${(!enteredEmailRequiredValid || !enteredEmailFormatValid) && touchedEmail ? "invalid" : ""}`}>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    onChange={inputChangeHandler}
                    onBlur={inputBlurHandler}
                    value={enteredEmail}
                />
                {!enteredEmailRequiredValid && touchedEmail && (
                    <p className="error-text">Email must not be empty.</p>
                )}
                {!enteredEmailFormatValid && touchedEmail && (
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

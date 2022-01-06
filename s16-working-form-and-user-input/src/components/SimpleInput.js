import React, {useState, useRef} from "react";
import PropTypes from "prop-types";

const SimpleInput = (props) => {
    let enteredNameRef = useRef();
    const [enteredName, setEnteredName] = useState('');
    const [enteredNameIsValid, setEnteredNameIsValid] = useState(true);

    

    const nameInputChangeHandler = (event) =>{
        setEnteredName(event.target.value);

    }

    const formSubmissionHandler = (event) => {
        event.preventDefault();

        if(enteredName.trim() === ''){
            setEnteredNameIsValid(false);
            return;
        }

        setEnteredNameIsValid(true);

        console.log(enteredName);
        let enteredValue = enteredNameRef.current.value;

        console.log(enteredValue);

        // enteredNameRef.current.value = ''; // Not ideal, don't manipulate the DOM directly
        setEnteredName('');



    }

    const inputClasses = enteredNameIsValid ? 'form-control' : 'form-control invalid';
    return (
        <form onSubmit={formSubmissionHandler}>
            <div className={inputClasses}>
                <label htmlFor="name">Your Name</label>
                <input 
                    type="text" 
                    id="name"  
                    onChange={nameInputChangeHandler}
                    ref={enteredNameRef}
                />
                {!enteredNameIsValid && <p className="error-text">Name must not be empty</p>}
            </div>
            <div className="form-actions">
                <button>Submit</button>
            </div>
        </form>
    );
};

SimpleInput.propTypes = {};

export default SimpleInput;

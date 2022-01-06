import {useState} from 'react';


const useInput = (validateValue) => {
    const [enteredValue, setEnteredValue]  = useState('');
    const [isTouched, setIsTouched]  = useState(false);


    const valueIsValid  = validateValue(enteredValue);
    const hasError = !valueIsValid && isTouched;

    const valueChangeHandler = (event) => {
        setEnteredValue(event.target.value);
    }

    const inputBlurHandler = (event) => {
        event.preventDefault();
        setIsTouched(true);
    }

    const reset = () => {
        setEnteredValue('');
        setIsTouched(false);

    }

    return {
        value : enteredValue, 
        hasError : hasError,
        isValid : valueIsValid,
        setIsTouched : setIsTouched,
        valueChangeHandler,
        inputBlurHandler,
        reset
    }
}

export default useInput;
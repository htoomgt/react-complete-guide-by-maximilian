import {useState} from 'react';


const useInputMultiRules = (validationRules) => {

    const [enteredValue, setEnteredValue]  = useState('');
    const [isTouched, setIsTouched]  = useState(false);


    let valueIsValid  =  false;
    let ruleStatuses = {};

    for(let rule in validationRules){
        let fnRule = validationRules[rule];       

        ruleStatuses[rule] = fnRule(enteredValue);
    }

    let validCount = 0;
    let i= 1;
    let ruleCount = Object.keys(ruleStatuses).length

    for(let ruleStatus in ruleStatuses){
        if(!ruleStatuses[ruleStatus]){
            valueIsValid = false;
            break;
        }
        else{
            validCount++;
        }

        if(i === ruleCount && validCount === ruleCount){
            valueIsValid = true;
        }
        
        i++;
    }

    validCount = 0;
    i = 0;

    const hasError = !valueIsValid && isTouched;

    const valueChangeHandler = (event) => {
        setEnteredValue(event.target.value);
    }

    const inputBlurHandler = (event) => {
        setIsTouched(true);
    }

    const reset = () => {
        setEnteredValue('');
        setIsTouched(false);
        ruleStatuses = {};
        valueIsValid = false;

    }

    return {
        value : enteredValue,
        rulesStatus : ruleStatuses, 
        hasError : hasError,
        isValid : valueIsValid,
        setIsTouched,
        valueChangeHandler,
        inputBlurHandler,
        reset
    }
}

export default useInputMultiRules;
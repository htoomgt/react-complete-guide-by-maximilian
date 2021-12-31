import React, {useRef, useState} from 'react';
import PropTypes from 'prop-types';
import classes from './MealItemForm.module.css';
import Input from '../../UI/Input/Input';

const MealItemForm = (props) => {
    const amountInputRef = useRef();
    const [amountIsValid, setAmountIsValid] = useState(true);


    const submitHandler = (event) => {
        event.preventDefault();
        
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        if( 
            enteredAmount.trim().length === 0 ||            
            enteredAmountNumber <= 0 ||
            enteredAmountNumber > 5) 
        {
            setAmountIsValid(false);
            return;
        }
        else{
            setAmountIsValid(true);
            props.onAddToCart(enteredAmountNumber);
            return;
        }
        
        
        
    }


    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input 
                label='Amount'
                ref={amountInputRef}
                input={{
                    id : "amount_" + props.id,
                    type : 'number',
                    min : 1,
                    max : 5,
                    step : 1,
                    defaultValue :1

                }}
            />
            <button> + Add</button>
            {!amountIsValid && <div className={classes.error}>Please enter a valid amount</div>}
        </form>
    )
}

MealItemForm.propTypes = {

}

export default MealItemForm

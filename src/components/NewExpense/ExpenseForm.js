import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ExpenseForm.css';

const ExpenseForm = props => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    });

    const titleChangeHandler = (event) => {        
        /* setUserInput({
            ...userInput,
            enteredTitle: event.target.value,
        }) */

        /* setUserInput((prevState) => {
            return {
                ...prevState,
                enteredTitle: event.target.value,
            }
        }); */

        setEnteredTitle(event.target.value);
    }

    const amountChangeHandler = (event) => {       

        setEnteredAmount(event.target.value);
    }

    const dateChangeHandler = (event) => {
        
        setEnteredDate(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title : enteredTitle,
            amount : enteredAmount,
            date : new Date(enteredDate)
        }

        console.log(expenseData);


    }

    return (
        <div>
            <form action="" onSubmit={submitHandler} >
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label htmlFor="title"> Title</label>
                        <input type="text" id="title" onChange={titleChangeHandler} />
                    </div>

                    <div className="new-expense__control">
                        <label htmlFor="amount"> Amount</label>
                        <input type="text" id="amount" onChange={amountChangeHandler}/>
                    </div>

                    <div className="new-expense__control">
                        <label htmlFor="amount"> Date</label>
                        <input type="date" onChange={dateChangeHandler} min="2019-01-01" max="2022-12-31" id="date" />
                    </div>
                </div>

                <div className="new-expense__actions">
                    <button type="submit"  >Add Exepnese</button>
                </div>
            </form>
        </div>
    );
}

ExpenseForm.propTypes = {

}

export default ExpenseForm

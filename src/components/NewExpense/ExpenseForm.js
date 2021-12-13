import React, { useState } from "react";
import PropTypes from "prop-types";
import "./ExpenseForm.css";
import { v4 as uuidv4 } from 'uuid';

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            id : uuidv4(),
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)            
        };

        props.onSaveExpenseData(expenseData);

        console.log(expenseData);

        setEnteredTitle("");
        setEnteredAmount("");
        setEnteredDate("");
    };

    return (
        <div>
            <form action="" onSubmit={submitHandler}>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label htmlFor="title"> Title</label>
                        <input
                            type="text"
                            id="title"
                            onChange={titleChangeHandler}
                            value={enteredTitle}
                        />
                    </div>

                    <div className="new-expense__control">
                        <label htmlFor="amount"> Amount</label>
                        <input
                            type="number"
                            id="amount"
                            onChange={amountChangeHandler}
                            value={enteredAmount}
                            min="0.01"
                            step="0.01"
                        />
                    </div>

                    <div className="new-expense__control">
                        <label htmlFor="amount"> Date</label>
                        <input
                            type="date"
                            value={enteredDate}
                            onChange={dateChangeHandler}
                            min="2019-01-01"
                            max="2022-12-31"
                            id="date"
                        />
                    </div>
                </div>

                <div className="new-expense__actions">
                    <button type="submit">Add Exepnese</button>
                </div>
            </form>
        </div>
    );
};

ExpenseForm.propTypes = {
    onSaveExpenseData : PropTypes.func.isRequired,
};

export default ExpenseForm;

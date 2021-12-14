import React from 'react';
import PropTypes from 'prop-types';
import ExpenseItem from './ExpenseItem';
import './ExpenseList.css';

const ExpenseList = props => {
    if(props.items.length === 0) {
        return (<h2 className="expense-list__fallback"> Found no expense </h2>)
    }

    return (
        <ul className="expense-list">
            {props.items.map((expense) => {
                return (
                    <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        amount={parseFloat(expense.amount)}
                        date={expense.date}
                    />
                    
                );
            })}
        </ul>
    )
}

ExpenseList.propTypes = {
    items: PropTypes.array.isRequired
}

export default ExpenseList

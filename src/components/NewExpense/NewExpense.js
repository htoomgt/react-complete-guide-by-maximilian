import React from 'react';
import PropTypes from 'prop-types';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';


const NewExpense = props => {
    

    return (
        <div className="new-expense" >
            <ExpenseForm 
                onSaveExpenseData={props.onAddExpense}
            />
        </div>
    )
}

NewExpense.propTypes = {
    onAddExpense: PropTypes.func.isRequired
}

export default NewExpense

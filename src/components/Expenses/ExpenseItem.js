import React from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import PropTypes from 'prop-types';
import Card from '../UI/Card';

const ExpenseItem = (props) => {
    
   
    return (
        <Card className="expense-item">
            <ExpenseDate 
                date={props.date}
            />
            <div className="expense-item__description">
                <h2> {props.title}</h2>
                <div class="expense-item__price"> $ {props.amount}</div>
            </div>
        </Card>
    )
}

export default  ExpenseItem;

ExpenseItem.propTypes = {
    date: PropTypes.instanceOf(Date).isRequired,
    title: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
}

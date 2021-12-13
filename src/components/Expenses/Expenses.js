import React from "react";
import PropTypes from "prop-types";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Card from "../UI/Card";

const  Expenses = (props) =>{
    return (
        <Card className="expenses">
            {props.items.map((expense) => {
                return (
                    <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />
                    
                );
            })}
        </Card>
    );
}

Expenses.propTypes = {
    items: PropTypes.array.isRequired,
};

export default Expenses;

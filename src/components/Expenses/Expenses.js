import React, {useState} from "react";
import PropTypes from "prop-types";
import './Expenses.css';
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";

const  Expenses = (props) =>{
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
      };

    const filteredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    });  
    

    return (
        <Card className="expenses">
            <ExpenseFilter 
                selected={filteredYear}
                onChangeFilter={filterChangeHandler}
            />

            <ExpenseList 
                items={filteredExpenses}
            />
            
        </Card>
    );
}

Expenses.propTypes = {
    items: PropTypes.array.isRequired,
};

export default Expenses;

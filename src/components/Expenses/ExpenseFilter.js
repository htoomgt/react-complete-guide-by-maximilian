import React from 'react';
import PropTypes from 'prop-types';
import './ExpenseFilter.css';

const ExpenseFilter = props => {
    const dropdownChangeHandler = (event) => {
        props.onChangeFilter(event.target.value);
    }


    return (
        <div className='expenses-filter'>
            <div className="expensees-filter__control">
                <label htmlFor="selFilterByYear"> Filter by year </label>
                <select  id="selFilterByYear"
                    value={props.selected}
                    onChange={dropdownChangeHandler}
                >
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </select>
            </div>
        </div>
    )
}

ExpenseFilter.propTypes = {
    selected: PropTypes.string.isRequired,
    onChangeFilter: PropTypes.func.isRequired
}

export default ExpenseFilter

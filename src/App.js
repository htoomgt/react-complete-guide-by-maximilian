import './App.css';
import Expenses from './components/Expenses/Expenses';
import React, {useState} from 'react';
import NewExpense from './components/NewExpense/NewExpense';
import {v4 as uuidv4} from 'uuid';


const App = () => {
  const expensesDummyData = [
    {
      id: uuidv4(),
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: uuidv4(), title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: uuidv4(),
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: uuidv4(),
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const [expenses, setExpenses] = useState(expensesDummyData);

  const onAddExpenseHandler = (enteredExpenseData) => {
       expenses.push(enteredExpenseData); 
       setExpenses((prevExpenses) => {
         return [...prevExpenses, enteredExpenseData];
       });

       console.log(expenses);
  }


  return (
    <div >
        <h2> Let's get started with React!</h2>

        <NewExpense  onAddExpense={onAddExpenseHandler}/>
        
        <Expenses 
          items={expenses}
        />

        
    </div>
  );

  /* return React.createElement(
    'div', {},
    React.createElement('h2', {}, 'Let\'s get started with React!'),
    React.createElement(Expenses, { items: expenses }),    
    ); */
}

export default App;

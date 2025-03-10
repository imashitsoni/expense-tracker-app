import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    
    // const titleChangeHandler = (event) => {
    //     console.log(event.target.value)
    //     setEnteredTitle(event.target.value);
    // }
    // const amountChangeHandler = (event) => {
    //     console.log(event.target.value)
    //     setEnteredAmount(event.target.value);
    // }
    // const dateChangeHandler = (event) => {
    //     setEnteredDate(event.target.value);
    // }

    const inputHandler = (identifier, value) => {
        if(identifier === 'title'){
            setEnteredTitle(value);
        }else if(identifier === 'amount'){
            setEnteredAmount(value);
        }else{
            setEnteredDate(value);
        }
    }
   
    const submitHandler = (event) => {
        event.preventDefault();
        
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };

        //console.log(expenseData)
        props.onSaveExpenseData(expenseData);

        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')
    }
    
    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input 
                        type="text" 
                        value={enteredTitle}
                        onChange={(event) => {inputHandler('title', event.target.value) }} 
                    />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input 
                        type="number" 
                        value={enteredAmount}
                        min="0.01" step="0.01" 
                        onChange={(event) => {inputHandler('amount', event.target.value) }} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input 
                        type="date" 
                        value={enteredDate}
                        min="2019-01-01" max="2026-12-31" 
                        onChange={(event) => {inputHandler('date', event.target.value) }}/>
                </div>
                <div  className='new-expense__actions'>
                    <button type="submit">Add Expense</button>
                </div>
            </div>
        </form>
    )
}

export default ExpenseForm;
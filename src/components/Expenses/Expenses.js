import React, { useState } from 'react'; 

import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpenseFilter';
import Card from '../UI/Card';

const Expenses = (props) => {
    const itemsArr = props.items;

    const [filteredYear, setFilteredYear] = useState('2025');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);        
    }

    const yearsArr = props.items.map((expense) => {
        return expense.date.getFullYear().toString();
    });
    const filteredYearsArr = [];
    yearsArr.map((yearEle) => {
        if(filteredYearsArr.includes(yearEle)){

        }else{
            filteredYearsArr.push(yearEle);
        }
    });
    const sortYears = (a,b) => { return a - b }
    const filteredYearsArrSorted = filteredYearsArr.sort(sortYears);
    const filteredExpenses = props.items.filter((expense) => {
        if(expense.date.getFullYear().toString() === filteredYear){
            return expense;
        }
    });

    
    let expensesContent = <p>No expenses found!</p>;

    if(filteredExpenses.length > 0){
        expensesContent = filteredExpenses.map((expense)=>{
            return (
                <ExpenseItem 
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            )
        });
    }

    return (   
        <>         
            <Card className="expenses"> 
                <ExpenseFilter yearsArr={filteredYearsArrSorted} selected={filteredYear} onChangeFilter={filterChangeHandler} />
                {expensesContent}            
            </Card>
        </>
    )
}

export default Expenses;
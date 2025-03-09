import React, { useState } from 'react';

import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = (props) => {
    
    let expTitle = props.title;
    let expAmount = props.amount;
    let expDate = props.date; 

    //const [expTitle, setTitle] = useState(props.title);

    //onclick event
    // const clickHandler = (count) => {
    //     setTitle('Zayn')
    // }
    return (
        <Card className="expense-item">
            <ExpenseDate date={expDate}/>
            <div className="expense-item__description">
                <h2>{expTitle}</h2>
                <div className="expense-item__price">${expAmount}</div>
            </div>
            {/* <button onClick={() => {clickHandler()} }>Change Title</button> */}
        </Card>
    ) 
}

export default ExpenseItem;
import React, {useState} from 'react';
import './ExpenseItem.css';
import Card from '../UI/Card';

const ExpenseItem = props => {
    return (
        
        <Card className='expense-item'>
            <div><h2>{props.date}</h2></div>
            <div className='expense_item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>{props.price}</div>
            </div>

        </Card>
    )
}
export default ExpenseItem;
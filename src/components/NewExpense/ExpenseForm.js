import React, {useState} from "react";
import './ExpenseForm.css';
const ExpenseForm = (props) => {
    const [enteredTitle, SetenteredTitle] = useState();
    const [enteredPrice, SetenteredPrice] = useState();
    const [enteredDate, SetenteredDate] = useState();

    const titleChangeHandler = (event) =>{
        SetenteredTitle(event.target.value);
    }
    const priceChangeHandler = (event) =>{
        SetenteredPrice(event.target.value);
    }
    const dateChangeHandler = (event) =>{
        SetenteredDate(event.target.value);
    }
    const submitHandler = (event)=>{
        event.preventDefault(); 

        const expenseData = {
            title : enteredTitle,
            price : enteredPrice,
            date : enteredDate
        }
        SetenteredTitle('');
        SetenteredPrice('');
        SetenteredDate('');
        props.onSaveExpenseData(expenseData);
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type='text' name='title' value={enteredTitle} className="new-expense__input" onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Price</label>
                    <input type='nubmer' name='price' value={enteredPrice} min='0.01' step='0.01' className="new-expense__input" onChange={priceChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type='date' name='date' value={enteredDate} className="new-expense__input" onChange={dateChangeHandler}/>
                </div>
                
            </div>
            <div className="new-expense__action">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}
export default ExpenseForm;
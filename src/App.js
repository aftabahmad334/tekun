import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Expenses from './components/Expenses/Expsenses';
import NewExpense from './components/NewExpense/NewExpense';
function App() {
  let DUMMY_EXPENSE = [
    {
      id:'d0',
      title:'BMW',
      date:'12th, Oct , 21',
      price:'$240'
    },
    {
      id:'d1',
      title:'Ferrari',
      date:'12th, Mar , 22',
      price:'$1550'},
    {
      id:'d2',
      title:'Sozuku',
      date:'15th, Jan , 21', 
      price:'$125'},
    {
      id:'d3',
      title:'Corrola',
      date:'05th, Dec , 21', 
      price:'$1440'
    },
  ];
  const [expenses,setExpenses] = useState(DUMMY_EXPENSE);
  const addExpenseHandler = (expense)=>{
    const updatedExpense = [expense, ...expenses];
    setExpenses(updatedExpense);
  }
  return (
    <div className="App">
      <h2>Get Started</h2>
      <NewExpense onAddExpense = {addExpenseHandler}/>
      <Expenses item= {expenses} />
    </div>
  );
}

export default App;

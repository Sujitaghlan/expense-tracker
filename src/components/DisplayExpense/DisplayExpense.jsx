import React from 'react'
import "./DisplayExpense.css";
import ExpenseItem from '../ExpenseItem/ExpenseItem';

const DisplayExpense = ({items=[], deleteItem}) => {
  return (
    <div className='display-container'>
      {items.length > 0 ?
      items.map(item => <ExpenseItem key={item.id} spendarea={item.spendarea} amount={item.amount} choice={item.choice} items={items} deleteItem = {deleteItem} id={item.id}/>):
      <p>No expense to display</p>
}
    </div>
      
  )
}

export default DisplayExpense

import React from 'react'
import "./ExpenseItem.css";
import { IoFastFoodOutline } from "react-icons/io5";
import { FaRupeeSign } from "react-icons/fa";
import { FaWindowClose } from "react-icons/fa";
import { MdOutlineTravelExplore } from "react-icons/md";
import { FaShoppingBag } from "react-icons/fa";

const ExpenseItem = ({id, choice, amount, spendarea, deleteItem}) => {

  return (
    <div className='expense-item-container'>
      <div className="items">
        <div className="food-category">
        {choice === "food"?<IoFastFoodOutline className='item-image'/>:choice === "travel"?<MdOutlineTravelExplore className='item-image'/>:choice === "shopping"?<FaShoppingBag className='item-image'/>:<IoFastFoodOutline className='item-image'/>}

        <div className="food">
          <div>{spendarea}</div>
          <div>{choice}</div>
        </div>
       
        
        
          
        </div>
        <div className="expense-amount">
          <FaRupeeSign />
          <span>{amount}</span>
        </div>
       
        
      </div>
      <FaWindowClose onClick={() => deleteItem(id)}/>
    </div>
  )
}

export default ExpenseItem

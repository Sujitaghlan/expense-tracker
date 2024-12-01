import React, { useState, useEffect } from 'react';
import "./Home.css";
import { FaRupeeSign } from "react-icons/fa";
import { FaTag } from "react-icons/fa";
import DisplayExpense from '../DisplayExpense/DisplayExpense';
import { Navigate, useNavigate } from 'react-router-dom';

const Home = ({ deleteItem, addItem, items = [] }) => {
  const [amount, setAmount] = useState("");
  const [spendarea, setSpendarea] = useState("");
  const [choice, setChoice] = useState(""); 
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

  const handleAmount = (event) => {
    setAmount(event.target.value);
  };

  const handleSpendarea = (event) => {
    setSpendarea(event.target.value);
  };

  const handleChange = (event) => {
    setChoice(event.target.value); // Update the choice with the selected value
    console.log("Radio choice selected:", event.target.value); // Debug log to check what's selected
  };

  const handleAddBtnClicked = () => {
    if (amount && spendarea && choice) {
      addItem(amount, spendarea, choice);
      setAmount("");
      setChoice(""); // Reset the choice after adding the item
      setSpendarea("");
    } else {
      console.log("Please fill in all fields before adding an expense.");
    }
  };

  const calculateTotal = () => {
    // Calculate the total from the `items` array
    return items.reduce((acc, item) => acc + parseFloat(item.amount || 0), 0);
  };

 

  // Use useEffect to update total whenever `items` change
  useEffect(() => {
    const newTotal = calculateTotal();
    setTotal(newTotal);
  }, [items]);

  const handleSignOut = () => {
    navigate('/');
  }

  return (
    <div className="home-container">
      <div className="show-expense">
        <p className="hello">Hello</p>
        <div className="total">
          <p>Total:</p>
          <FaRupeeSign className="rupee" />
          <span>{total}</span>
        </div>
        <h2>My Expenses</h2>
        <DisplayExpense items={items} deleteItem = {deleteItem} />
      </div>

      <div className="expense-input-container">
        <div className="amount">
          <FaRupeeSign className="rupee" />
          <input type="text"  placeholder="Amount" onChange={handleAmount} value={amount} />
        </div>
        <div className="place-of-spend">
          <FaTag className="tag" />
          <input type="text" placeholder="Place of Spend" onChange={handleSpendarea} value={spendarea} />
        </div>
        <div className="area-of-expense">
          <div className="food-container">
            <input
              type="radio"
              name="expense-name"
              id="food"
              value="food"
              checked={choice === "food"}
              onChange={handleChange}
            />
            <label htmlFor="food">Food/Beverage</label>
          </div>
          <div className="travel-container">
            <input
              type="radio"
              name="expense-name"
              id="travel"
              value="travel"
              checked={choice === "travel"}
              onChange={handleChange}
            />
            <label htmlFor="travel">Travel/Commute</label>
          </div>
          <div className="shopping-container">
            <input
              type="radio"
              name="expense-name"
              id="shopping"
              value="shopping"
              checked={choice === "shopping"}
              onChange={handleChange}
            />
            <label htmlFor="shopping">Shopping</label>
          </div>
        </div>
        <div className="buttons">
          <button className="add-to-expense" onClick={handleAddBtnClicked}>
            Add to Expense
          </button>
          <button className="sign-out" onClick={handleSignOut}>Sign Out</button>
        </div>
      </div>
    </div>
  );
};

export default Home;

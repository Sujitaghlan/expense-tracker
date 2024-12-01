import React from 'react'
import "./App.css";
import LandingPage from './components/LandingPage/LandingPage';
import LogIn from './components/LogIn/LogIn';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';

const App = () => {
  const [login, setLogin] = useState(false);
  const [signup, setSignup] = useState(false);

  const [items, setItems] = useState([]);
  
const addItem = (amount, spendarea, choice) => {
  console.log("new item added");
  const newItems = [...items, {id: Date.now(), amount, spendarea, choice}];
  setItems(newItems);

}

const deleteItem = (id) => {
  console.log("Item deleted")
  const newListItems = items.filter(item => item.id !== id);
  setItems(newListItems);
}
  return (
    <Router>
      <div className='main-container'>
        <Routes>
          <Route path="/" element={<LandingPage setLogin = {setLogin} setSignup = {setSignup}/>}></Route>
          <Route path="/login" element={<LogIn setLogin = {setLogin} setSignup = {setSignup} login = {login} signup = {signup}/>}></Route>
          <Route path="/home" element={<Home items={items} addItem={addItem} deleteItem={deleteItem}/>}></Route>
        </Routes>
      </div>
    </Router>
   
  )
}

export default App


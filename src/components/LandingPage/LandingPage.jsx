import React, { useState } from 'react';
import './LandingPage.css';
import { useNavigate } from 'react-router-dom';

const LandingPage = ({setLogin, setSignup}) => {
  const navigate = useNavigate();
  const handleSignIn = () => {
    setLogin(true);
    setSignup(false);
    navigate('/login');
 
  }

  const handleSignUp = () => {
    setSignup(true);
    setLogin(false);
    navigate('/login');

  }
  return (
    <div className='landing-page'>
      <h1>Welcome to Expense Tracker!!!</h1>
      <div className="btn-container">
        <button onClick={handleSignIn}>Sign In</button>
        <button onClick = {handleSignUp}>Sign Up</button>
      </div>
    </div>
  );
};

export default LandingPage;

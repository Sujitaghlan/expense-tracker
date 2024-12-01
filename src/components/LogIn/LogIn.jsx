import React, { useState } from 'react'
import './LogIn.css';
import { useNavigate } from 'react-router-dom';

const LogIn = ({setLogin, setSignup, login, signup}) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password , setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login && username && password) {
      navigate('/home');
    } else if (signup && username && password) {
      alert('Sign Up Successful');
    } else {
      alert('Please fill in the required fields.');
    }
  };

  return (
    <div className='login-container'>
      <form onSubmit={handleSubmit}>
        <h2>{login ? 'Sign In' : signup ? 'Sign Up' : 'Sign In'}</h2>
        <div className="form-input">
          <input type="text" placeholder='Username' value={username}
            onChange={(e) => setUsername(e.target.value)}/>
          <input type="password" placeholder='Password' value={password}
            onChange={(e) => setPassword(e.target.value)}/>
        </div>
     
        <button type="submit">{login ? 'Sign In' : 'Sign Up'}</button>
        
      </form>
    </div>
  )
}

export default LogIn

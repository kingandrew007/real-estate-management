import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './signup.css'; 

function SignUp() {
  const data = { name: '', emailid: '', current_password: '', mobile: '' };
  const [inputData, setInputData] = useState(data);
  const navigate = useNavigate(); 

  const handleOnChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Check if any field is empty
    const { name, emailid, current_password, mobile } = inputData;
    if (!name || !emailid || !current_password || !mobile) {
      alert("All fields are mandatory. Please fill out all fields.");
      return;
    }
  
    document.getElementById('spiners-signup').innerHTML = `<div class="d-flex justify-content-center">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>`;
  
    try {
      const response = await axios.post("http://localhost:8000/signup", inputData);
      if (response.status === 201) {
        alert("Successfully signed up!");
        setTimeout(() => {
          navigate('/login'); 
        }, 1000);
      }
    } catch (err) {
      if (err.response && err.response.data && err.response.data.error) {
        alert(err.response.data.error);

setTimeout(() => {
  
  navigate('/login'); 
}, 500);

      } else {
        alert("Oh no! Something went wrong. Please check your details and try again.");
      }
    }
  
    document.getElementById('spiners-signup').innerHTML = `<strong>Sign Up</strong>`; 
  };

  return (
    <div className="container-signup">
      <form className='signup-form-signup' name='signup_Details' method='post'>
        <h1>REGISTER</h1>
        <Link to={'/login'} style={{marginBottom:'20px'}} className="btn btn-primary" aria-current="page">Login</Link>

        <input value={inputData.name} onChange={handleOnChange} name='name' id='name' type="text" className="form-control-signup" placeholder="Enter your name" />
        <input onChange={handleOnChange} value={inputData.emailid} name='emailid' id='email' type="text" className="form-control-signup" placeholder="Enter your Email" />
        <input onChange={handleOnChange} title='password must be 6 six one lower one upper one digit' value={inputData.current_password} id='pass' name='current_password' type="password" className="form-control-signup" placeholder="Enter your password" />
        <input
          onChange={handleOnChange}
          value={inputData.mobile}
          id='mobNum'
          name='mobile'
          type="text"  
          className="form-control-signup"
          placeholder="Enter your mobile number"
          pattern="[0-9]{10}"  // Regular expression to match exactly 10 digits
        />
        <button id='spiners-signup' onClick={handleSubmit} className='signup-btn'>Sign Up</button>
      </form>
    </div>
  )
}

export default SignUp;

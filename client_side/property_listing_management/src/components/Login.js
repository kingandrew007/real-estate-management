import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css'; // Import CSS file for custom styles

function Login() {
  const [inputData, setInputData] = useState({ emailid: '', current_password: '' });
  const navigate = useNavigate(); 
  const handleOnChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      if (!inputData.emailid || !inputData.current_password) {
        alert("Email and password are required");
        return;
      }
  
      const response = await axios.post("http://localhost:8000/login-", inputData);
  
      if (response.data.msgHere === "Login Successful") {
        alert('You have logged in');

        setTimeout(() => {
          navigate('/explores')
        }, 1000);
      } else {
        alert("Email ID or password is incorrect. Please try again.");
      }
    } catch (err) {
      console.error("Error:", err);
      alert("An error occurred. Please try again.");
    }
  };
  

  return (
    <div className="container-login">
      <div className="row-login justify-content-center">
        <div className="col-md-6">
          <div className="card-login mt-5">
            <div className="card-body-login">
              <h1 className="card-title-login text-center">Login</h1>
              <p className="card-text-login text-center ">Register if not done <Link className='btn-signup-login' to={'/signup'}>Signup</Link></p>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label-login">Email</label>
                  <input
                    type="email"
                    className="form-control-login"
                    id="email"
                    name="emailid"
                    value={inputData.emailid}
                    onChange={handleOnChange}
                    placeholder="Enter your email id"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label-login">Password</label>
                  <input
                    type="password"
                    className="form-control-login"
                    id="password"
                    name="current_password"
                    value={inputData.current_password}
                    onChange={handleOnChange}
                    placeholder="Enter your password"
                  />
                </div>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <button type="submit" className="btn btn-primary">Submit</button>
                  <Link to="/forgot-password">Forgot Password?</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

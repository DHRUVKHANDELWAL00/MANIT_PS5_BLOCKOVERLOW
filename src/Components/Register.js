import './login.css'
import React, { useState } from 'react';
// import './YourStyleSheet.css';  // Import your CSS file

const Register = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const handleToggle = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className={`container ${isSignUp ? 'right-panel-active' : ''}`} id="container">
      <div className={`form-container ${isSignUp ? 'sign-up-container' : 'sign-in-container'}`}>
        <form action="Home.html">
          <h1>{isSignUp ? 'Create Account' : 'Sign In'}</h1>
          <br />
          {isSignUp && (
            <>
              <span>or use your email for registration</span>
              <br />
            </>
          )}
          {isSignUp && <input type="text" placeholder="Name" />}
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          {isSignUp && <button>Sign Up</button>}
          {!isSignUp && (
            <>
              <a href="#">Forgot your password?</a>
              <button>Sign In</button>
            </>
          )}
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className={`overlay-panel overlay-left ${isSignUp ? 'sign-up-mode' : ''}`}>
            <img className="Img-logo" src="./wastify.png" alt="logo ki image" />
            <br />
            <h1>Welcome Back!</h1>
            <p>To keep connected with us, please login with your personal info</p>
            <br />
            <button className="ghost" onClick={handleToggle} id="signIn">
              Sign In
            </button>
          </div>
          <div className={`overlay-panel overlay-right ${isSignUp ? 'sign-up-mode' : ''}`}>
            <img className="Img-logo" src="./wastify.png" alt="logo" />
            <br />
            <h1>Hello, Friend!</h1>
            <p>Enter your personal details and start the journey with us</p>
            <button className="ghost" onClick={handleToggle} id="signUp">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;


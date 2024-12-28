import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../components/CSS/sign_in.css';

function Login() {
  const [isLogin, setIsLogin] = useState(true); // State to toggle between login and signup forms

  return (
    <div className="background">
      <div className="header">
        <div className="navbar" style={{ justifyContent: 'left', paddingBottom: '20px' }}>
          <a href="/index.html">
            <i className="fa-solid fa-house"></i>Home
          </a>
          <a href="#">
            <i className="fa-solid fa-circle-info"></i>About
          </a>
          <a href="#">
            <i className="fa-solid fa-envelope"></i>Contact
          </a>
        </div>
      </div>
      <div className="container">
        <div className="content">
          <h2 className="logo">
            <i className="fa-solid fa-building" style={{ paddingRight: '10px' }}></i> Socio-Sphere
          </h2>
          <div className="text-info">
            <h2>
              Welcome !! <br />
              <span>To Smart Society Management System</span>
            </h2>
            <p>
              A Smart Society Management System (SSMS) is a technology-driven platform designed to
              streamline and enhance the management of residential societies or communities.
            </p>
            <div className="social-icons">
              <a href="https://github.com/Mack69/SocioSphere">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/mayukh-ghosh-2b5705224/">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="log-reg-box">
          {/* Login Form */}
          {isLogin && (
            <div className="form login">
              <form action="#">
                <h2>Sign In</h2>
                <div className="input-box">
                  <span className="icon">
                    <i className="fa-solid fa-envelope"></i>
                  </span>
                  <input type="email" required />
                  <label>Email</label>
                </div>

                <div className="input-box">
                  <span className="icon">
                    <i className="fa-solid fa-lock"></i>
                  </span>
                  <input type="password" required />
                  <label>Password</label>
                </div>

                <div className="remember-forget">
                  <label>
                    <input type="checkbox" /> Remember Me
                  </label>
                  <a href="#">Forget Password?</a>
                </div>

                <button className="Logbtn" type="submit">
                  Login
                </button>
                <div className="register">
                  <p>
                    Don't have an Account?{' '}
                    <button type="button" className="register-link" onClick={() => setIsLogin(false)}>
                      Sign Up
                    </button>
                  </p>
                </div>
              </form>
            </div>
          )}

          {/* Sign Up Form */}
          {!isLogin && (
            <div className="form signup">
              <form action="#">
                <h2>Sign Up</h2>
                <div className="input-box">
                  <span className="icon">
                    <i className="fa-solid fa-user"></i>
                  </span>
                  <input type="text" required />
                  <label>Name</label>
                </div>

                <div className="input-box">
                  <span className="icon">
                    <i className="fa-solid fa-envelope"></i>
                  </span>
                  <input type="email" required />
                  <label>Email</label>
                </div>

                <div className="input-box">
                  <span className="icon">
                    <i className="fa-solid fa-lock"></i>
                  </span>
                  <input type="password" required />
                  <label>Password</label>
                </div>

                <div className="remember-forget">
                  <label>
                    <input type="checkbox" /> I agree to the terms & conditions
                  </label>
                </div>

                <button className="Logbtn" type="submit">
                  Sign Up
                </button>
                <div className="register">
                  <p>
                    Already have an Account?{' '}
                    <button type="button" className="login-link" onClick={() => setIsLogin(true)}>
                      Sign In
                    </button>
                  </p>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;

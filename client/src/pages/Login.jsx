
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { Link } from "react-router-dom";
import "../CSS/sign_in.css";

function Login() {
  const [isLogin, setLogin] = useState(true, { email: "", password: "" });
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { storeTokenInLS } = useAuth();
  const navigate = useNavigate();

  // Handle input changes of Registration Form
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle input changes of Login Form
  const handleInput = (e) => {
    setLogin({ ...isLogin, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isLogin) {
        const response = await fetch("http://localhost:5000/api/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(isLogin),
        });
        console.log(isLogin);
        if (response.ok) {
          const responseData = await response.json();
          console.log("after login: ", responseData);
          storeTokenInLS(responseData.token);
          setLogin({ email: "", password: "" });
          navigate("/dashboard");
        } else {
          alert("Invalid Credentials");
        }
      } else {
        const response = await fetch(
          "http://localhost:5000/api/auth/register",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );
        console.log("response data : ", response);

        if (response.ok) {
          const responseData = await response.json();
          storeTokenInLS(responseData.token);
          alert("registration successful");
          setFormData({ username: "", email: "", password: "" });
          navigate("/Login");
          console.log(responseData);
        } else {
          console.log("error inside response ", "error");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="background">
      <div className="header">
        <div
          className="navbar"
          style={{ justifyContent: "left", paddingBottom: "20px" }}
        >
          <Link to="/">
            <i className="fa-solid fa-house"></i> Home
          </Link>
          <Link to="/about">
            <i className="fa-solid fa-circle-info"></i> About
          </Link>
          <Link to="/contact">
            <i className="fa-solid fa-envelope"></i> Contact
          </Link>
        </div>
      </div>

      <div className="container">
        <div className="content">
          <h2 className="logo">
            <i
              className="fa-solid fa-building"
              style={{ paddingRight: "10px" }}
            ></i>{" "}
            Socio-Sphere
          </h2>
          <div className="text-info">
            <h2>
              Welcome !! <br />
              <span>To Smart Society Management System</span>
            </h2>
            <p>
              A Smart Society Management System (SSMS) is a technology-driven
              platform designed to streamline and enhance the management of
              residential societies or communities.
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
          {isLogin ? (
            <div className="form login">
              <form onSubmit={handleSubmit}>
                <h2>Sign In</h2>

                <div className="input-box">
                  <span className="icon">
                    <i className="fa-solid fa-envelope"></i>
                  </span>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    value={isLogin.email}
                    onChange={handleInput}
                  />
                  <label>Email</label>
                </div>

                <div className="input-box">
                  <span className="icon">
                    <i className="fa-solid fa-lock"></i>
                  </span>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    required
                    value={isLogin.password}
                    onChange={handleInput}
                  />
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
                    Don't have an Account?{" "}
                    <button
                      type="button"
                      className="register-link"
                      onClick={() => setLogin(false)}
                    >
                      Sign Up
                    </button>
                  </p>
                </div>
              </form>
            </div>
          ) : (
            <div className="form signup">
              <form onSubmit={handleSubmit}>
                <h2>Sign Up</h2>

                <div className="input-box">
                  <span className="icon">
                    <i className="fa-solid fa-user"></i>
                  </span>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    required
                    value={formData.username}
                    onChange={handleChange}
                  />
                  <label>Name</label>
                </div>

                <div className="input-box">
                  <span className="icon">
                    <i className="fa-solid fa-envelope"></i>
                  </span>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <label>Email</label>
                </div>

                <div className="input-box">
                  <span className="icon">
                    <i className="fa-solid fa-lock"></i>
                  </span>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    required
                    value={formData.password}
                    onChange={handleChange}
                  />
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
                    Already have an Account?{" "}
                    <button
                      type="button"
                      className="login-link"
                      onClick={() => setLogin(true)}
                    >
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

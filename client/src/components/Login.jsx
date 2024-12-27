
import { Link } from 'react-router-dom'
import '/Web Development/SocioSphere/client/src/components/CSS/sign_in.css'

function Login() {
  return (
    <div className="background">
      <div className="container">
        <div className="content">
          <h2 className="logo">
            <i className="fa-solid fa-building" style={{ paddingRight: "5px" }}></i> Socio-Sphere
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
              <a href="#">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="#">
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
                <a href="#">Forget Password ?</a>
              </div>

              <button className="Logbtn" type="submit">
                Login
              </button>
              <div className="register">
                <p>
                  Don't have an Account ?
                  <a className="register-link" href="#">
                    Sign Up
                  </a>
                </p>
              </div>
            </form>
          </div>

          {/* Sign Up Form */}
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
                  Already have an Account ?
                  <a className="login-link" href="#">
                    Sign In
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login
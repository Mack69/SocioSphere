import React from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/profile.css";

const Profile = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout actions (e.g., clear user session)
    // Redirect to the Login page
    navigate("/login");
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-header">
          <img
            src="https://cdn.usegalileo.ai/sdxl10/6cef6c51-7525-403c-b377-d382a8c24891.png"
            alt="Profile"
            className="profile-image"
          />
          <h2>Alice Martin</h2>
          <p>alice@gmail.com</p>
          <p>Member since 2020</p>
        </div>

        <div className="profile-section">
          <h3>Contact Information</h3>
          <div className="profile-info">
            <p>
              <strong>Phone</strong>
              <br />
              415-123-4567
            </p>
            <p>
              <strong>Email</strong>
              <br />
              alice@gmail.com
            </p>
          </div>
        </div>

        <div className="profile-section">
          <h3>Your Home</h3>
          <div className="profile-info">
            <p>
              <strong>Address</strong>
              <br />
              1234 Main St, San Francisco, CA
            </p>
            <p>
              <strong>Unit Number</strong>
              <br />
              Unit 101
            </p>
          </div>
        </div>

        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
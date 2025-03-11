import React from 'react';
import '../CSS/dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Dashboard</h1>
        <p>A quick overview of your society's activity</p>
      </div>
      <div className="dashboard-stats">
        <div className="stat-card">
          <p>Total Bookings</p>
          <h2>1,200</h2>
        </div>
        <div className="stat-card">
          <p>Upcoming Events</p>
          <h2>15</h2>
        </div>
        <div className="stat-card">
          <p>Open Complaints</p>
          <h2>5</h2>
        </div>
        <div className="stat-card">
          <p>Total Members</p>
          <h2>100</h2>
        </div>
      </div>
      <div className="quick-actions">
        <h3>Quick Action</h3>
        <div className="action-card">
          <div>
            <p>Create a new event</p>
            <p>Create a new event for your society. Make sure to add all the details so your members know what to expect.</p>
          </div>
          <button>Create</button>
        </div>
        <div className="action-card">
          <div>
            <p>Create a new booking</p>
            <p>Create a new booking for your society. Make sure to add all the details so your members know what to expect.</p>
          </div>
          <button>Create</button>
        </div>
        <div className="action-card">
          <div>
            <p>Create a new complaint</p>
            <p>Create a new complaint for your society. Make sure to add all the details so your members know what to expect.</p>
          </div>
          <button>Create</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
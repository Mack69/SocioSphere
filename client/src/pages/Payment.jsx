import React from "react";
import "../CSS/payment.css";

const Payments = () => {
  return (
    <div className="payments-container">
      <h1>Create a payment request</h1>
      <form className="payment-form">
        <label htmlFor="user">Select a user</label>
        <select id="user" required>
          <option value="" disabled selected>Search for a user</option>
          <option value="user1">User 1</option>
          <option value="user2">User 2</option>
        </select>

        <label htmlFor="unit">Select a unit</label>
        <select id="unit" required>
          <option value="" disabled selected>Search for a unit</option>
          <option value="unit1">Unit 1</option>
          <option value="unit2">Unit 2</option>
        </select>

        <div className="date-fields">
          <div>
            <label htmlFor="start-date">Start date</label>
            <input type="date" id="start-date" required />
          </div>
          <div>
            <label htmlFor="end-date">End date</label>
            <input type="date" id="end-date" required />
          </div>
        </div>

        <h3>Payment details</h3>
        <input type="number" placeholder="Enter the amount" required />
        <textarea placeholder="Enter a description (optional)" rows="4"></textarea>

        <label htmlFor="due-date">Due date</label>
        <input type="date" id="due-date" required />

        <button type="submit">Submit Request</button>
      </form>
    </div>
  );
};

export default Payments;
import React from "react";
import "../CSS/complaint.css";

const Complaints = () => {
  return (
    <div className="complaints-container">
      <h1>Complaints</h1>
      <div className="sort-section">
        <label htmlFor="sort">Sort by</label>
        <select id="sort">
          <option>Date</option>
          <option>Status</option>
          <option>ID</option>
        </select>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Created At</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {[1, 2, 3, 4, 5].map((item) => (
            <tr key={item}>
              <td><a href="#">#123{item}</a></td>
              <td>Broken Elevator</td>
              <td>2/{item}/2023</td>
              <td><span className="status open">Open</span></td>
              <td><a href="#" className="close-ticket">Close Ticket</a></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Complaints;
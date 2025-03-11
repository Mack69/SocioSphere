import React from "react";
import "../CSS/booking.css";

const Bookings = () => {
  return (
    <div className="bookings-container">
      <h1>Facility Booking</h1>
      <div className="tabs">
        <a href="#" className="active">
          All
        </a>
        <a href="#">Pending</a>
        <a href="#">Approved</a>
        <a href="#">Cancelled</a>
      </div>
      <div className="booking-list">
        {/* Booking Item 1 */}
        <div className="booking-item">
          <div className="booking-info">
            <div
              className="booking-image"
              style={{
                backgroundImage:
                  'url("https://cdn.usegalileo.ai/sdxl10/34b7975c-f7fd-4ed5-821d-ee9aca33d5c4.png")',
              }}
            ></div>
            <div className="booking-details">
              <p className="booking-title">Meeting Room 1</p>
              <p className="booking-time">2023-02-01 10:00 - 2023-02-01 11:00</p>
            </div>
          </div>
          <button className="booking-action">Approve</button>
        </div>

        {/* Booking Item 2 */}
        <div className="booking-item">
          <div className="booking-info">
            <div
              className="booking-image"
              style={{
                backgroundImage:
                  'url("https://cdn.usegalileo.ai/sdxl10/b67fdeb3-8772-4592-adba-a16c36016b0c.png")',
              }}
            ></div>
            <div className="booking-details">
              <p className="booking-title">Meeting Room 2</p>
              <p className="booking-time">2023-02-01 10:00 - 2023-02-01 11:00</p>
            </div>
          </div>
          <button className="booking-action">Approve</button>
        </div>

        {/* Booking Item 3 */}
        <div className="booking-item">
          <div className="booking-info">
            <div
              className="booking-image"
              style={{
                backgroundImage:
                  'url("https://cdn.usegalileo.ai/sdxl10/be1c3861-4879-4d84-9a66-e17717ee5e4d.png")',
              }}
            ></div>
            <div className="booking-details">
              <p className="booking-title">Meeting Room 3</p>
              <p className="booking-time">2023-02-01 10:00 - 2023-02-01 11:00</p>
            </div>
          </div>
          <button className="booking-action">Approve</button>
        </div>

        {/* Booking Item 4 */}
        <div className="booking-item">
          <div className="booking-info">
            <div
              className="booking-image"
              style={{
                backgroundImage:
                  'url("https://cdn.usegalileo.ai/sdxl10/411f6e2a-69be-4249-95f3-fbe095b62e88.png")',
              }}
            ></div>
            <div className="booking-details">
              <p className="booking-title">Meeting Room 4</p>
              <p className="booking-time">2023-02-01 10:00 - 2023-02-01 11:00</p>
            </div>
          </div>
          <button className="booking-action">Approve</button>
        </div>

        {/* Booking Item 5 */}
        <div className="booking-item">
          <div className="booking-info">
            <div
              className="booking-image"
              style={{
                backgroundImage:
                  'url("https://cdn.usegalileo.ai/sdxl10/0ecef78d-4bb0-4b68-81fc-c0860e770b1a.png")',
              }}
            ></div>
            <div className="booking-details">
              <p className="booking-title">Meeting Room 5</p>
              <p className="booking-time">2023-02-01 10:00 - 2023-02-01 11:00</p>
            </div>
          </div>
          <button className="booking-action">Approve</button>
        </div>
      </div>
    </div>
  );
};

export default Bookings;
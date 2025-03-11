import React from "react";
import "../CSS/event.css";

const Events = () => {
  return (
    <div className="events-container">
      <h1>Events & Ceremonies</h1>
      <h3>Upcoming</h3>
      <div className="main-content">
        {/* Calendar */}
        <div className="calendar">
          <h4>June 2023</h4>
          <div className="calendar-nav">
            <span>&lt;</span>
            <span>&gt;</span>
          </div>
          <div className="calendar-grid">
            <div>S</div>
            <div>M</div>
            <div>T</div>
            <div>W</div>
            <div>T</div>
            <div>F</div>
            <div>S</div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div className="active">5</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
            <div>9</div>
            <div>10</div>
            <div>11</div>
            <div>12</div>
            <div>13</div>
            <div>14</div>
            <div>15</div>
            <div>16</div>
            <div>17</div>
            <div>18</div>
            <div>19</div>
            <div>20</div>
            <div>21</div>
            <div>22</div>
            <div>23</div>
            <div>24</div>
            <div>25</div>
            <div>26</div>
            <div>27</div>
            <div>28</div>
            <div>29</div>
            <div>30</div>
          </div>
        </div>

        {/* Events List */}
        <div className="events-list">
          <div className="event-item">
            <i className="fas fa-flag"></i>
            <div>
              <strong>Independence Day Celebration</strong>
              <p>July 4th, 2023</p>
            </div>
            <span>12:00 PM - 9:00 PM</span>
          </div>

          <div className="event-item">
            <i className="fas fa-utensils"></i>
            <div>
              <strong>Labor Day BBQ</strong>
              <p>September 5th, 2023</p>
            </div>
            <span>12:00 PM - 6:00 PM</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
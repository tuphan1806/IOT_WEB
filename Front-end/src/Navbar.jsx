import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles/Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <NavLink exact to={'/'} className="linkPage">
        Dashboard
      </NavLink>
      <NavLink to={'/sensor_data'} className="linkPage">
        Datasensors
      </NavLink>
      <NavLink to={'/action_history'} className="linkPage">
        Action history
      </NavLink>
      <NavLink to={'/profile'} className="linkPage">
        Profile
      </NavLink>
    </div>
  );
}

export default Navbar;

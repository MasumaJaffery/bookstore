/* eslint-disable linebreak-style */
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/categories">Categories</NavLink>
  </nav>
);

export default Navbar;

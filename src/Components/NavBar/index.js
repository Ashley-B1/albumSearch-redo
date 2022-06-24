import React from 'react';
import { FaSearch } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className='nav-bar'>
      <input type="search" id="search-input" placeholder="Who are you looking for?" required />
      <button id="search-icon">
        <FaSearch />
      </button>
    </div>
  )
}

export default NavBar

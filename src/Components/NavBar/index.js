import React from 'react';
import './NavBar.css'
import { FaSearch } from "react-icons/fa";

import * as albumActions from '../../store/albums';
import { useDispatch } from 'react-redux';

const NavBar = () => {

  const dispatch = useDispatch();

  let results;

  const lookUp = async e => {
    e.preventDefault();

    if (e.keyCode === 13) {
      let artist = e.target.value;

      if (artist === '') {
        alert('Please fill out this field')
      } else {
        const albums = await dispatch(albumActions.getAlbums(artist));
        results = albums.albums.results;
        // console.log(results);
      }
    }
  };

  return (
    <div className='nav-bar'>
      <input onKeyUp={lookUp} type="search" id="search-input" placeholder="Who are you looking for?" required />
      <button id="search-icon">
        <FaSearch />
      </button>
    </div>
  )
}

export default NavBar

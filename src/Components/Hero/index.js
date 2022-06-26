import { React, useState } from "react";
import AlbumsContainer from "../AlbumsContainer";

import "./Hero.css";
import "./NavBar.css";
import "./ResultsDiv.css";

import { FaSearch } from "react-icons/fa";

import * as albumActions from "../../store/albums";
import { useDispatch } from "react-redux";
const searchInput = document.querySelector("#search-input");

const HeroContainer = () => {
  const dispatch = useDispatch();

  let [artist, setArtist] = useState("");
  let [albums, setAlbums] = useState([]);

  const lookUp = async (e) => {
    e.preventDefault();

    if (e.keyCode === 13) {
      artist = e.target.value;
      setArtist(artist);

      if (!artist.length) {
        alert("Please fill out this field");
      }
      const res = await dispatch(albumActions.getAlbums(artist));
      albums = res.albums.results;
      setAlbums(albums);
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();

    artist = searchInput?.value;
    setArtist(artist);

    if (!artist.length) {
      alert("Please fill out this field");
    }
    const res = await dispatch(albumActions.getAlbums(artist));
    albums = res.albums.results;
    setAlbums(albums);
  };

  return (
    <div className="hero-div">
      <div className="nav-bar">
        <input
          onKeyUp={lookUp}
          type="search"
          id="search-input"
          placeholder="Who are you looking for?"
          required
        />
        <button onClick={handleClick} id="search-icon">
          <FaSearch />
        </button>
      </div>
      <div className="results">
        {artist ? (
          <>
            <h2 id="intro" className="intro">
              {`${albums?.length} results for ${artist}`}
            </h2>
            <AlbumsContainer albums={albums} />
          </>
        ) : (
          <h2 id="intro" className="intro">
            Search Albums by Artist Name
          </h2>
        )}
      </div>
    </div>
  );
};

export default HeroContainer;

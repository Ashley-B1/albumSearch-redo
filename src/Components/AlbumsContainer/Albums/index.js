import React from 'react';

import './Albums.css';

const Albums = ({ album }) => {
  return (
    <div className='album-card'>
      <div className='pic-sect'>
        <img className='album-pic' src={album.artworkUrl100} />
      </div>
      <h3 className='album-title'>
        {album.collectionName} by {album.artistName}.
      </h3>
    </div>
  )
}

export default Albums;

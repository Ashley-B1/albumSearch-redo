import React from 'react';
import Albums from './Albums'

import './AlbumsContainer.css'

const AlbumsContainer = ({ albums }) => {
  // console.log(albums);

  return (
    <div className='albums-section'>
      {albums.map(album => (
        <Albums key={album.collectionId} album={album} />
      ))}
    </div>
  )
}

export default AlbumsContainer

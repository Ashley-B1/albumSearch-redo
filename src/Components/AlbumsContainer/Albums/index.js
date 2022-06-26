import React from 'react'

const Albums = ({ album }) => {
  return (
    <div className='album-card'>
      {album.collectionName}
    </div>
  )
}

export default Albums;

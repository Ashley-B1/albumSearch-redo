const LOAD_ALBUMS = 'albums/loadAlums';

const loadAlbums = albums => {
  return {
    type: LOAD_ALBUMS,
    albums,
  };
};

// get all albums from specific artist
export const getAlbums = artist => async dispatch => {
  const res = await fetch(`https://itunes.apple.com/search?term=${artist}&media=music&entity=album&attribute=artistTerm&limit=200`);

  if (res.ok) {
    const albums = await res.json();

    return dispatch(loadAlbums(albums));
  }

  return await res.json();
};

const initialState = { albums: {} };

const albumsReducer = (state = initialState, action) => {
  let newState;
  let albums;

  switch (action.type) {
    case LOAD_ALBUMS:
      newState = { ...state };
      albums = {};
      action.albums.results.forEach(album => (albums[album.collectionId] = album));
      newState.albums.results = albums;
      return newState;
    default:
      return state;
  }
};

export default albumsReducer

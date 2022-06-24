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

const initialState = { entries: {}, posts: {} };

const albumsReducer = (state = initialState, action) => {
  let newState;
  let entries;

  switch (action.type) {
    case LOAD_ALBUMS:
      newState = { ...state };
      entries = {};
      action.albums.forEach(album => (entries[album.collectionId] = album));
      newState.entries = entries;
      return newState;
    default:
      return state;
  }
};

export default albumsReducer

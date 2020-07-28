const initialState = {
  top: {
    topAnime: null,
    topManga: null,
    upcoming: null,
    topMovie: null,
    airing: null,
    trendingAnime: null,
    trendingMovie: null,
  },
  currentAnime: null,
  token: 'yes',
  currentAnimeInfo: null,
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CURRENT_ANIME':
      return {
        ...state,
        currentAnime: action.payload,
      };
    case 'CURRENT_ANIME_INFO':
      return {
        ...state,
        currentAnimeInfo: action.payload,
      };
    case 'TOKEN':
      return {
        ...state,
        token: action.payload,
      };

    default:
      return state;
  }
};

export default Reducer;

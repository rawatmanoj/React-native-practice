const Reducer = (state, action) => {
  switch (action.type) {
    case 'TOP':
      return {
        ...state,
        top: {
          topAnime: action.payload.topAnime,
          topManga: action.payload.topManga,
          upcoming: action.payload.upcoming,
          topMovie: action.payload.topMovie,
          airing: action.payload.airing,
        },
      };
    case 'LOADING':
      return {
        ...state,
        isLoading: action.payload,
      };
    case 'TOPANIME':
      return {
        ...state,
        topAnime: action.payload,
      };
    case 'TOPMANGA':
      return {
        ...state,
        topManga: action.payload,
      };
    case 'TOPMOVIE':
      return {
        ...state,
        topMovie: action.payload,
      };
    case 'UPCOMING':
      return {
        ...state,
        upcoming: action.payload,
      };
    case 'AIRING':
      return {
        ...state,
        airing: action.payload,
      };
    default:
      return state;
  }
};

export default Reducer;

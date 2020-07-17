const Reducer = (state, action) => {
  switch (action.type) {
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
    default:
      return state;
  }
};

export default Reducer;

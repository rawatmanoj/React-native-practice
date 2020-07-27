import React, {createContext, useReducer} from 'react';
import Reducer from './reducers';

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

const Store = ({children}) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};

export const Context = createContext(initialState);
export default Store;

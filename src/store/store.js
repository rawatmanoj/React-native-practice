import React, {createContext, useReducer} from 'react';
import Reducer from './reducers';

const initialState = {
  topAnime: null,
  topManga: null,
  upcoming: null,
  topMovie: null,
  airing: null,
};

const Store = ({children}) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};

// export const Context = createContext([{}, function () {}]);
export const Context = createContext(initialState);

export default Store;

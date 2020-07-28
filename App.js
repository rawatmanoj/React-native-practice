import React from 'react';
import AppTabs from './src/routes/AppTabs';
import Store from './src/store/store';
import {Provider} from 'react-redux';
import store from './src/store';
const App = () => {
  return (
    <Provider store={store}>
      <AppTabs />
    </Provider>
  );
};

export default App;

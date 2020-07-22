import React from 'react';
import AppTabs from './src/routes/AppTabs';
import Store from './src/store/store';

const App = () => {
  return (
    <Store>
      <AppTabs />
    </Store>
  );
};

export default App;

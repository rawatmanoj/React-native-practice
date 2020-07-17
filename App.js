import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {deviceWidth, deviceHeight} from './src/api/Constants';
import AppTabs from './src/routes/AppTabs';
import Store from './src/store/store';
import {StyleSheet} from 'react-native';

const App = () => {
  return (
    <Store>
      <AppTabs />
    </Store>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#252a34',
  },
});

export default App;

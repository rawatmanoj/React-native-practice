import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {deviceWidth, deviceHeight} from './Constants';
import AppTabs from './src/AppTabs';

const App = () => {
  return (
    // <View style={styles.homeContainer}>
    //   <View style={styles.navbarContainer}>
    //     <Text adjustsFontSizeToFit style={styles.navText}>
    //       Animenatio
    //     </Text>
    //   </View>
    // </View>
    <AppTabs />
  );
};
// const styles = StyleSheet.create({
//   homeContainer: {
//     flex: 1,
//   },
//   navbarContainer: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     width: (deviceWidth * 100) / 100,
//     height: (deviceHeight * 10) / 100,
//     backgroundColor: '#252a34',
//   },
//   navText: {
//     fontSize: 30,
//     color: '#ff2e63',
//     // fontFamily: Platform.OS === 'ios' ? 'RobotoSlab' : 'Lato.ttf',
//     fontFamily: 'RobotoSlab-Regular',
//     fontWeight: '600',
//   },
// });

export default App;

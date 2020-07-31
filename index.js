/**
 * @format
 */
//import './wyr';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import EStyleSheet from 'react-native-extended-stylesheet';
import {deviceWidth} from './src/api/Constants';

EStyleSheet.build({
  // always call EStyleSheet.build() even if you don't use global variables!
  $textColor: '#0275d8',
  $rem: deviceWidth / 380,
  $baseColor: '#292B3A',
  $spcColor: '#FF6160',
});

AppRegistry.registerComponent(appName, () => App);

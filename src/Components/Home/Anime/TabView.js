import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import About from './About/About';
import Characters from '../Anime/Characters/Characters';
const renderTabBar = (props) => (
  <TabBar
    tabStyle={{width: 130}}
    scrollEnabled={true}
    onTabPress={({route, preventDefault}) => {
      if (route.key === 'first') {
        // preventDefault();
        // Do something else
      }
    }}
    {...props}
    indicatorStyle={{backgroundColor: '#191725'}}
    style={styles.tabBar}
  />
);

const FirstRoute = () => <View style={styles.scene} />;

const SecondRoute = () => <View style={styles.scene} />;
const initialLayout = {width: Dimensions.get('window').width};

export default function AnimeTabView() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'about', title: 'About'},
    {key: 'characters', title: 'Characters'},
    {key: 'first', title: 'First'},
    {key: 'second', title: 'Second'},
  ]);

  const renderScene = SceneMap({
    about: About,
    characters: Characters,
    first: FirstRoute,
    second: SecondRoute,
  });
  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      renderTabBar={renderTabBar}
    />
  );
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    backgroundColor: '#191725',
  },
  tabBar: {
    color: 'black',
    backgroundColor: '#191725',
    borderBottomColor: 'grey',
    borderBottomWidth: 1.1,
  },
});

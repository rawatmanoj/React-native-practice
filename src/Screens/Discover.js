import * as React from 'react';
import {View, StyleSheet, Dimensions, Text} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';

const renderTabBar = (props) => (
  <TabBar
    renderLabel={({route, focused, color = 'red'}) => (
      <Text style={{color, margin: 8}}>{route.title}</Text>
    )}
    {...props}
    // indicatorStyle={{backgroundColor: 'white'}}
    style={{backgroundColor: '#191725'}}
  />
);

const FirstRoute = () => (
  <View style={[styles.scene, {backgroundColor: 'black'}]} />
);

const SecondRoute = () => (
  <View style={[styles.scene, {backgroundColor: 'black'}]} />
);

const initialLayout = {width: Dimensions.get('window').width};

export default function AnimeInfoScreen() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'First'},
    {key: 'second', title: 'Second'},
  ]);

  const renderScene = SceneMap({
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
    borderTopWidth: 0,
    flex: 1,
  },
});

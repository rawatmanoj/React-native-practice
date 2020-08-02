/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, Dimensions} from 'react-native';
import {TabView, TabBar} from 'react-native-tab-view';
import EStyleSheet from 'react-native-extended-stylesheet';
import TabViewScreen from './TabViewScreen';

const renderTabBar = (props) => (
  <TabBar
    renderLabel={({route, focused, color}) => (
      <Text
        style={{
          color,
          fontSize: 16,
          fontFamily: 'Roboto-Bold',
          borderTopWidth: 0,
          shadowRadius: 0,
          borderRadius: 0,
        }}>
        {route.title}
      </Text>
    )}
    tabStyle={styles.tabStyles}
    scrollEnabled={true}
    onTabPress={({route, preventDefault}) => {
      if (route.key === 'first') {
        // preventDefault();
        // Do something else
      }
    }}
    {...props}
    indicatorStyle={{backgroundColor: EStyleSheet.value('$baseColor')}}
    style={styles.tabBar}
  />
);

const initialLayout = {width: Dimensions.get('window').width};

export default function AnimeTabView() {
  console.log('animeTabView');
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'NowPlaying', title: 'Now Playing'},
    {key: 'UpComing', title: 'Upcoming'},
    {key: 'Trending', title: 'Trending'},
    {key: 'Popular', title: 'Popular'},
  ]);

  const renderScene = ({route}) => {
    switch (route.key) {
      case 'NowPlaying':
        return (
          <TabViewScreen
            type={'ANIME'}
            sortType={'POPULARITY_DESC'}
            format={'TV'}
            status={'RELEASING'}
          />
        );
      case 'UpComing':
        return (
          <TabViewScreen
            type={'ANIME'}
            sortType={'POPULARITY_DESC'}
            format={'TV'}
            status={'NOT_YET_RELEASED'}
          />
        );
      case 'Trending':
        return (
          <TabViewScreen
            type={'ANIME'}
            sortType={'TRENDING_DESC'}
            format={'TV'}
            status={'FINISHED'}
          />
        );
      case 'Popular':
        return (
          <TabViewScreen
            type={'ANIME'}
            sortType={'POPULARITY_DESC'}
            format={'TV'}
            status={'FINISHED'}
          />
        );
      default:
        return null;
    }
  };
  return (
    <TabView
      lazy={true}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      renderTabBar={renderTabBar}
    />
  );
}

const styles = EStyleSheet.create({
  scene: {
    flex: 1,

    backgroundColor: '$baseColor',
  },
  tabBar: {
    backgroundColor: '$baseColor',
  },
  tabStyles: {
    width: 130,
  },
});

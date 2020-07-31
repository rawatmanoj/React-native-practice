import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen';
import AnimeStack from '../Screens/AnimeInfoScreen';
import SearchScreen from '../Screens/SearchScreen';

const Stack = createStackNavigator();

const HomeStack = React.memo(() => {
  console.log('HomeStack');
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        options={{headerShown: false}}
        name="HomeScreen"
        component={HomeScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="AnimeStacks"
        component={AnimeStack}
      />
      <Stack.Screen
        options={{headerShown: false, animationEnabled: false}}
        name="SearchScreen"
        component={SearchScreen}
      />
    </Stack.Navigator>
  );
});

export default HomeStack;

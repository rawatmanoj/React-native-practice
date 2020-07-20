import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import AnimeInfoScreen from '../Screens/AnimeInfoScreen';
const Stack = createStackNavigator();
const AnimeStack = ({route}) => {
  console.log(route);
  return (
    <Stack.Navigator initialRouteName="AnimeInfoScreen">
      <Stack.Screen
        options={{headerShown: false}}
        name="HomeScreen"
        component={AnimeInfoScreen}
      />
    </Stack.Navigator>
  );
};

export default AnimeStack;

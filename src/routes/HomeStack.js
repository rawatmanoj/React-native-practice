import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator, TouchableOpacity} from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen';
import AnimeStack from '../routes/AnimeStack';
const Stack = createStackNavigator();
const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="AnimeStack" component={AnimeStack} />
    </Stack.Navigator>
  );
};

export default HomeStack;

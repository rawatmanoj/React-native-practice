import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AnimeInfoScreen from '../Screens/AnimeInfoScreen';
const Stack = createStackNavigator();
const AnimeStack = () => {
  console.log('AnimeStack');
  return (
    <Stack.Navigator initialRouteName="AnimeInfoScreen">
      <Stack.Screen
        options={{headerShown: false}}
        name="AnimeInfoScreen"
        component={AnimeInfoScreen}
      />
    </Stack.Navigator>
  );
};

export default AnimeStack;

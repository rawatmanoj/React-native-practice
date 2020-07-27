import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen';
import AnimeStack from '../routes/AnimeStack';
const Stack = createStackNavigator();

const HomeStack = React.memo(() => {
  const renders = React.useRef(0);
  console.log('HomeStack' + renders.current++);
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        options={{headerShown: false}}
        name="HomeScreen"
        component={HomeScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="AnimeStack"
        component={AnimeStack}
      />
    </Stack.Navigator>
  );
});

export default HomeStack;

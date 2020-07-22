import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AnimeInfoScreen from '../Screens/AnimeInfoScreen';
import Context from '../store/store';
const Stack = createStackNavigator();
const AnimeStack = () => {
  //const [dispatch] = useContext(Context);
  // console.log(route);
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

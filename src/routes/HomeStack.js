import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen';
import AnimeStack from '../Screens/AnimeInfoScreen';
import {Text, View} from 'react-native';
const Stack = createStackNavigator();

const newComp = () => {
  return (
    <View>
      <Text>NEWCOMP</Text>
    </View>
  );
};

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
      {/* <Stack.Screen
        options={{headerShown: false}}
        name="newComp"
        component={newComp}
      /> */}
    </Stack.Navigator>
  );
});

export default HomeStack;

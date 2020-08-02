import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import DiscoverScreen from '../Screens/Discover';
import DiscoverAnime from '../Components/Discover/DiscoverAnime/DiscoverAnime';
import EStyleSheet from 'react-native-extended-stylesheet';

//import {createFluidNavigator} from 'react-navigation-fluid-transitions';
const Stack = createStackNavigator();

const HomeStack = React.memo(() => {
  return (
    <Stack.Navigator initialRouteName="DiscoverScreen">
      <Stack.Screen
        options={{headerShown: false}}
        name="DiscoverScreen"
        component={DiscoverScreen}
      />
      <Stack.Screen
        options={{
          headerShown: true,
          title: 'Movie',
          headerTintColor: 'white',
          //   headerTitleStyle: {color: 'white'},
          headerStyle: {
            backgroundColor: EStyleSheet.value('$baseColor'),
            elevation: 0, // remove shadow on Android
            shadowOpacity: 0, // remove shadow on iOS
          },

          headerBackTitleStyle: {color: 'white'},
        }}
        name="DiscoverAnime"
        component={DiscoverAnime}
      />
    </Stack.Navigator>
    // <Navigator />
  );
});

export default HomeStack;

import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
//import {Ionicons, AntDesign, EvilIcons} from 'react-native-vector-icons';
import Center from './Center';
const Tabs = createBottomTabNavigator();
function Home() {
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
}

function Discover() {
  return (
    <View>
      <Text>Discover</Text>
    </View>
  );
}

const AppTabs = () => {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home';
              return <AntDesign name={'home'} size={size} color={color} />;
            } else if (route.name === 'Search') {
              return <Ionicons name={'flask'} size={size} color={color} />;
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}>
        <Tabs.Screen name="Home" component={Home} />
        <Tabs.Screen name="Search" component={Discover} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

export default AppTabs;

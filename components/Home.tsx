import React, {FunctionComponent} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Profile from './Profile';
import Counter from './counter';
import {Root} from '../App';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Tab = createBottomTabNavigator<Root>();
const Home: FunctionComponent = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          if (route.name === 'Profile') {
            return <AntDesign name="profile" size={size} color={color} />;
          } else if (route.name === 'Counter') {
            return <AntDesign name="menu-fold" size={size} color={color} />;
          }

          // You can return any component that you like here!
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}>
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Counter" component={Counter} />
    </Tab.Navigator>
  );
};

export default Home;

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './components/Login';
// import Counter from './components/counter';
import {Provider} from 'react-redux';
import store from './redux/Store';
import Api from './components/Api';
import Home from './components/Home';
import Counter from './components/counter';
export type Root = {
  Login: undefined;
  Api: undefined;
  Home: undefined;
  Counter: undefined;
  Profile: undefined;
};
const Stack = createNativeStackNavigator<Root>();
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            animation: 'slide_from_right',
            headerStyle: {
              backgroundColor: '#a0a1e8',
            },
            headerTintColor: '#fff',
          }}>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Counter" component={Counter} />
          <Stack.Screen name="Api" component={Api} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;

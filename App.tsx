import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './components/Login';
import Counter from './components/counter';
import {Provider} from 'react-redux';
import store from './redux/Store';
import Api from './components/Api';
export type Root = {
  Login: undefined;
  Counter: undefined;
  Api: undefined;
};
const Stack = createNativeStackNavigator<Root>();
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="Counter" component={Counter} />
          <Stack.Screen name="Api" component={Api} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;

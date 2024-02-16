// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screen/SplashScreen';
import Walktrough from '../screen/Walktrough';
import Home from '../screen/Home';
import Login from '../screen/Login';


const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown:false}} />
        <Stack.Screen name="Walktrough" component={Walktrough} options={{headerShown:false}}/>
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
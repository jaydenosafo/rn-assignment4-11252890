import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Components/HomeScreen';
import LogIn from './Components/LogIn';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" options={{headerShown:false}} component={LogIn} />
        <Stack.Screen name="Home" options={{headerShown:false}} component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App



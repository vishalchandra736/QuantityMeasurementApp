import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/Home/Home.js';
import Measurement from './src/screens/Measurement/Measurement.js';
import Length from './src/screens/Length/Length.js';
import Temperature from './src/screens/Temperature/Temperature.js';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Measurement" component={Measurement} />
        <Stack.Screen name="Length" component={Length} />
        <Stack.Screen name="Temperature" component={Temperature} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

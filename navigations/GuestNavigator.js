import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from '../screens/LoginScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import SignupScreen from '../screens/SignupScreen';

const { Navigator, Screen } = createStackNavigator();

export default function GuestNavigator() {
  return (
    <NavigationContainer screenOptions={{ headerShown: 'false' }}>
      <Stack.Screen name="Register" component={SignupScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
    </NavigationContainer>
  );
}
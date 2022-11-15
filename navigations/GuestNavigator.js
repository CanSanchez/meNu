import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from '../screens/LoginScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import SignupScreen from '../screens/SignupScreen';

const GuestStack = createStackNavigator();

export default function GuestNavigator() {
  return (
    <GuestStack.Navigator initialRouteName="starting" screenOptions={{headerStyle: {
      backgroundColor: '#FDF1E1',
    }}}>
      <GuestStack.Screen name="Welcome" component={WelcomeScreen}/>
      <GuestStack.Screen name="Login" component={LoginScreen}/>
      <GuestStack.Screen name="Signup" component={SignupScreen}/>
    </GuestStack.Navigator>
  );
}
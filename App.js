import React, {useState} from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { AppNavigator } from './components/NavBar';
import { ActivityNavigator } from './components/RecActivities';
import 'react-native-gesture-handler';
import styled from 'styled-components';
import { default as theme } from './styles/theme.json'; // <-- Import app theme
import { mapping, light, dark } from '@eva-design/eva';

import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import WelcomeScreen from "./screens/WelcomeScreen";
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import { HomeScreen } from './pages/home.component';

// const white = {...eva.light, ...theme};
// const black = {...eva.dark, ...theme};

// const themes = { white, black };

export default function App() {
    
  // const [theme, setTheme] = React.useState('white');

  // const toggleTheme = () => {
  //   const nextTheme = theme === 'white' ? 'black' : 'white';
  //   setTheme(nextTheme);
  //   console.log(nextTheme)
  // };
  const Stack = createStackNavigator();

  return (
    <>
      <IconRegistry icons={EvaIconsPack}/>
      {/* <ApplicationProvider {...eva} mapping={mapping} theme={themes[theme]}></ApplicationProvider> */}
      <ApplicationProvider {...eva} theme={{...eva.dark, ...theme}}>
        {/* <AppNavigator toggleTheme={toggleTheme} /> */}
       {/* <NavigationContainer> */}
       <AppNavigator>
          <Stack.Navigator initialRouteName="starting" screenOptions={{headerStyle: {
            backgroundColor: '#FDF1E1',
          }}}>
            <Stack.Screen name="Welcome" component={WelcomeScreen}/>
            <Stack.Screen name="Login" component={LoginScreen}/>
            <Stack.Screen name="Signup" component={SignupScreen}/>
            <Stack.Screen name='Home' component={HomeScreen} />
          </Stack.Navigator>
          </AppNavigator>
       {/* </NavigationContainer> */}
      </ApplicationProvider>
    </>
  );
};

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider, AuthContext } from '../providers/AuthProvider';
import MainNavigator from './MainNavigator';
import GuestNavigator from './GuestNavigator';
import { useState } from 'react';

// function AppNavigator() {

//   const [isSignedIn, setSignIn] = useState(true)

//     return (
//         <NavigationContainer>
          
//         {isSignedIn ? (<MainNavigator />):(<GuestNavigator />)}
          
//         </NavigationContainer>
//     );
//   }

  const [isSignedIn, setSignIn] = useState(false)

  export const AppNavigator = () => (
    <NavigationContainer>
        {isSignedIn ? (<MainNavigator />):(<GuestNavigator />)}
    </NavigationContainer>
  );
  
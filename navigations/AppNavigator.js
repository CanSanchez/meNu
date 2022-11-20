import { HomeDrawerNavigator } from '../navigations/DrawerNavigator';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

export const AppNavigator = () => (

    <Navigator headerMode='none'>
      <Screen name={'Drawer'} component={HomeDrawerNavigator}/>
    </Navigator>

);
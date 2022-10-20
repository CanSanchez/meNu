import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation, BottomNavigationTab, Layout, Text, IconRegistry, Icon } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';
import { HomeScreen } from '../../pages/home.component';
import { CalendarScreen } from '../../pages/calendar.component';
import { ProfileScreen } from '../../pages/profile.component';
import { ActivityScreen } from '../../pages/activities.component';
import {  AccountSettingsScreen } from '../../pages/accountsettings.components'
import { NotificationScreen } from '../../pages/notificationsettings.components';


const { Navigator, Screen } = createBottomTabNavigator();

//const ActivitiesScreen = () => (
  //<Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    //<Text category='h1'>Activities</Text>
  //</Layout>
//);

const BottomTabBar = ({ navigation, state }) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={index => navigation.navigate(state.routeNames[index])}>
    <BottomNavigationTab title='Home' icon={HomeIcon}/>
    <BottomNavigationTab title='Activities' icon={ActivityIcon}/>
    <BottomNavigationTab title='Calendar' icon={CalendarIcon}/>
    <BottomNavigationTab title='Profile' icon={UserIcon}/>
  </BottomNavigation>
);

const TabNavigator = () => (
  <Navigator tabBar={props => <BottomTabBar {...props} />}>
    <Screen name='Home' component={HomeScreen}/>
    <Screen name='Activities' component={ActivityScreen}/>
    <Screen name='Calendar' component={CalendarScreen}/>
    <Screen name='Profile' component={ProfileScreen}/>
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <TabNavigator />
  </NavigationContainer>
);

const HomeIcon = (props) => (
  <Icon {...props} name='home-outline'/>
);

const ActivityIcon = (props) => (
  <Icon {...props} name='brush-outline'/>
);

const CalendarIcon = (props) => (
  <Icon {...props} name='calendar-outline'/>
);

const UserIcon = (props) => (
  <Icon {...props} name='person-outline'/>
);


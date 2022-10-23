import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Button, BottomNavigation, BottomNavigationTab, Layout, Text, IconRegistry, Icon } from '@ui-kitten/components';
import { HomeScreen } from '../../pages/home.component';
import { CalendarScreen } from '../../pages/calendar.component';
import { ProfileScreen } from '../../pages/profile.component';
import { ActivityScreen } from '../../pages/activities.component';
import {  AccountSettingsScreen } from '../../pages/accountsettings.components'
import { NotificationScreen } from '../../pages/notificationsettings.components';
import { TopNavigationSimpleUsageShowcase } from '../TopNav';
// import ProfileScreen from '../../pages/test';
import MyStack from '../../pages/test';
import { createStackNavigator } from '@react-navigation/stack';


//Bottom navigation bar

const { Navigator, Screen } = createBottomTabNavigator();

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
    <Screen name='Home' component={HomeStackScreen} options={{
      header: TopNavigationSimpleUsageShowcase
    }}
    />
    <Screen name='Activities' component={ActivityScreen} options={{
      header: TopNavigationSimpleUsageShowcase
    }}/>
    <Screen name='Calendar' component={CalendarScreen} options={{
      header: TopNavigationSimpleUsageShowcase
    }}/>
    <Screen name='Profile' component={ProfileStackScreen} options={{
      header: TopNavigationSimpleUsageShowcase
    }}/>
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <TabNavigator />
  </NavigationContainer>
);


//icons

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

const NotIcon = (props) => (
  <Icon {...props} name='bell' fill="#7161EF"/>
);

const HeaderStyle = () => ({
  headerStyle: {
    backgroundColor: '#FFFEF4',
  },
  headerTintColor: 'black',
  headerTitleStyle: {
    fontWeight: 'bold',
  }
});


const ProfileStack = createStackNavigator();

const ProfileStackScreen = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen name='Profile' component={ProfileScreen} options={{
      headerTransparent: true
    }}></ProfileStack.Screen>
    <ProfileStack.Screen name='Account Settings' component={AccountSettingsScreen} options={{
      headerTransparent: true
    }}></ProfileStack.Screen>
    <ProfileStack.Screen name='Notifications' component={NotificationScreen} options={{
      headerTransparent: true
    }}></ProfileStack.Screen>
    <ProfileStack.Screen name='Home' component={HomeScreen} options={{
      headerTransparent: true
    }}></ProfileStack.Screen>
  </ProfileStack.Navigator>
  );

const HomeStack = createStackNavigator();

const HomeStackScreen = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen name='Home' component={HomeScreen} options={{
      headerTransparent: true
    }}></ProfileStack.Screen>
  </ProfileStack.Navigator>
  );
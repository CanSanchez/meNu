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
import { createStackNavigator } from '@react-navigation/stack';
import { FaveScreen } from '../../pages/favourites.components';
import { ActivityCardScreen } from '../../pages/activitycards.component';
import { CreateAccountScreen } from '../../pages/newaccount.component';
import LoginScreen from '../../screens/LoginScreen';
import WelcomeScreen from '../../screens/WelcomeScreen';
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
      headerTransparent: true
    }}
    />
    <Screen name='Activities' component={ActivityStackScreen} options={{
     headerTransparent: true
    }}/>
    <Screen name='Calendar' component={CalendarScreen} options={{
      headerTransparent: true
    }}/>
    <Screen name='Profile' component={ProfileStackScreen} options={{
      headerTransparent: true
    }}/>
  </Navigator>
);

export const AppNavigator = () => (
    <TabNavigator />
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
    backgroundColor: '#FFFFFF',
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
    <ProfileStack.Screen name='Favourites' component={FaveScreen} options={{
      headerTransparent: true
    }}></ProfileStack.Screen>
  </ProfileStack.Navigator>
  );

const HomeStack = createStackNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name='Homepage' component={HomeScreen} options={{
      headerTransparent: true
    }}></HomeStack.Screen>
     <HomeStack.Screen name='Favourites' component={FaveScreen} options={{
      headerTransparent: true
    }}></HomeStack.Screen>
     <HomeStack.Screen name='Notifications' component={NotificationScreen} options={{
      headerTransparent: true
    }}></HomeStack.Screen>
    <HomeStack.Screen name='Activities' component={ActivityScreen} options={{
      headerTransparent: true
    }}></HomeStack.Screen>
    

  </HomeStack.Navigator>
  );

  const ActivityStack = createStackNavigator();

  const ActivityStackScreen = () => (
    <ActivityStack.Navigator>
      <ActivityStack.Screen name='Activities' component={ActivityScreen} options={{
        headerTransparent: true
      }}></ActivityStack.Screen>
      <ActivityStack.Screen name='Activity Card' component={ActivityCardScreen} options={{
        headerTransparent: true
      }}></ActivityStack.Screen>
   </ActivityStack.Navigator>
    );
import React from 'react';
import { Icon, Text, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { StyleSheet, Image, View, Alert } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { NotificationScreen } from '../../pages/notificationsettings.components';
import { FaveScreen } from '../../pages/favourites.components';
import { HomeScreen } from '../../pages/home.component';
import { ActivityScreen } from '../../pages/activities.component';
import { CalendarScreen } from '../../pages/calendar.component';
import { ProfileScreen } from '../../pages/profile.component';
import { createStackNavigator } from '@react-navigation/stack';



const NotIcon = (props) => (
  <Icon {...props} name='bell' fill="#E88C68" />
);

const SaveIcon = (props) => (
    <Icon {...props}  name="bookmark" fill="#E88C68" />
);

const NotAction = () => (
  <TopNavigationAction icon={NotIcon}/>
);

const RenderRightActions = () => (
    <React.Fragment>
      <TopNavigationAction  icon={NotIcon}/>
      <TopNavigationAction icon={SaveIcon}/> 
    </React.Fragment>
)



export const TopNavigationSimpleUsageShowcase = () => (
    <TopNavigation
        
        accessoryRight={RenderRightActions}
        accessoryLeft ={LogoPrimary}
        style={{
          backgroundColor: '#FFFEF4',
          position: 'fixed'
          
        }} >
    </TopNavigation>

);



    
const LogoPrimary = ({navigation}) => (
  <View style={{paddingLeft: 15}}>
    <Image 
        style={{  width: 26 , height: 35, objectFit: 'cover' }}
        source={require('../../assets/logo/Logo.png')}
      />
  </View>
);



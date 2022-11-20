import React from 'react';
import { Icon, Text, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { StyleSheet, Image, View, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Divider, List, ListItem } from '@ui-kitten/components';
import { DrawerActions } from "@react-navigation/native";
import { ModalWithBackdropShowcase } from '../List/NotificationList';

const RenderRightActions = ({navigation}) => (
  <>
  <TopNavigationAction 
  icon={NotIcon} 
  onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
  />
  <TopNavigationAction 
  icon={SaveIcon} 
  onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
  />
  </>
)

const RenderLefttActions = ({navigation}) => (
  <>
  <TopNavigationAction 
  icon={LogoPrimary} 
  onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
  />
  </>
)


export const TopNav= () => (

  
    <TopNavigation
        accessoryRight={RenderRightActions}
        accessoryLeft ={RenderLefttActions}
        style={{
          backgroundColor: '#FFFEF4',
          position: 'fixed'
        }} >
    </TopNavigation>
    

);



//logo

const LogoPrimary = ({navigation}) => (
  <View style={{paddingLeft: 15}}>
    <Image 
        style={{  width: 26 , height: 35, objectFit: 'cover' }}
        source={require('../../assets/logo/Logo.png')}
      />
  </View>
);

//icons

const NotIcon = (props) => (
  <Icon {...props} name='bell' fill="#E88C68" />
);

const SaveIcon = (props) => (
    <Icon {...props}  name="bookmark" fill="#E88C68" />
);

const NotAction = () => (
  <TopNavigationAction icon={NotIcon}/>
);
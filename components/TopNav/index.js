import React from 'react';
import { Icon, Text, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { StyleSheet, Image, View } from 'react-native';
import { FaveScreen } from '../../pages/favourites.components';

const NotIcon = (props) => (
  <Icon {...props} name='bell' fill="#7161EF"/>
);

const SaveIcon = (props) => (
    <Icon {...props} name="bookmark" fill="#7161EF"/>
);

const NotAction = () => (
  <TopNavigationAction icon={NotIcon}/>
);

const renderRightActions = () => (
    <React.Fragment>
      <TopNavigationAction icon={NotIcon}/>
      <TopNavigationAction icon={SaveIcon}/> 
    </React.Fragment>
)

export const TopNavigationSimpleUsageShowcase = ({navigation}) => (
    <TopNavigation 
        func={() => navigation.push('Notifications')}
        accessoryRight={renderRightActions}
        accessoryLeft={LogoPrimary}
        style={{
          backgroundColor: '#FFFFFF',
          paddingTop: 20
        }} >
    </TopNavigation>

  )
    
const LogoPrimary = () => (
  <View style={{paddingLeft: 15}}>
    <Image
        style={{ width: 20 , height: 27.5, objectFit: 'cover' }}
        source={require('../../assets/logo/logoprimary.png')}
      />
  </View>
);

import React from 'react';
import { Icon, Text, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { FavouritesPage } from '../../pages/favourites.component';

const renderRightActions = () => (

    <React.Fragment >
      <TopNavigationAction icon={NotIcon}/>
      <TopNavigationAction icon={SaveIcon}/>
      
    </React.Fragment>
)

export const TopNavigationSimpleUsageShowcase = () => (

  
  <TopNavigation 
          accessoryRight={renderRightActions}
          accessoryLeft={LogoIcon} />
  

)
    

const TopNavigationStyling = () => (


    <TopNavigation
    title={evaProps => <Text {...evaProps}>Title</Text>}
    subtitle={evaProps => <Text {...evaProps}>Subtitle</Text>}
  />
  
)
  

const styles = StyleSheet.create({
    icon: {
       
    }
});

const NotIcon = (props) => (
  <Icon {...props} name='bell' fill="#7161EF"/>
);

const LogoIcon = (props) => (
  <Image {...props} style={{ width:30, height: 41}} source={require('../../assets/Logo.png')}/>
);

const SaveIcon = (props) => (
    <Icon {...props} name="bookmark" fill="#7161EF"/>
);

const NotAction = () => (
  <TopNavigationAction icon={NotIcon}/>

);


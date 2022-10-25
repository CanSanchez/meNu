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

const renderRightActions = ( {navigation} ) => (
    <React.Fragment>
      <TopNavigationAction icon={NotIcon}/>
      <TopNavigationAction onPress={() => navigation.push('Favourites')} icon={SaveIcon}/> 
    </React.Fragment>
  );

export const TopNavigationSimpleUsageShowcase = () => (
    <TopNavigation
        accessoryRight={renderRightActions}
        accessoryLeft ={LogoPrimary}
        style={{
          backgroundColor: '#FFFEF4',
          paddingTop: 20
        }} />


);


const TopNavigationStyling = () => (
  <TopNavigation
    title={evaProps => <Text {...evaProps}>Title</Text>}
    subtitle={evaProps => <Text {...evaProps}>Subtitle</Text>}
  />
);

const styles = StyleSheet.create({
    icon: {
       
    }
});

const LogoPrimary = () => (
  <View style={{paddingLeft: 15}}>
    <Image
        style={{ width: 20 , height: 27.5, objectFit: 'cover' }}
        source={require('../../assets/logo/logoprimary.png')}
      />
  </View>
);
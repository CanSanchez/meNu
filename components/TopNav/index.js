import React from 'react';
import { Icon, Text, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';

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
  );

export const TopNavigationSimpleUsageShowcase = () => (
    <TopNavigation
        accessoryRight={renderRightActions} />


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

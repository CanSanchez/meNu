import React from 'react';
import { StyleSheet } from 'react-native';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { BottomNavigation, BottomNavigationTab, IconRegistry, Icon } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';

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

export const BottomNavigationSimpleUsageShowcase = () => {

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  return (
    <>
    <IconRegistry icons={EvaIconsPack} />
    <BottomNavigation
      selectedIndex={selectedIndex}
      onSelect={index => setSelectedIndex(index)}>
      <BottomNavigationTab title='Home' icon={HomeIcon}/>
      <BottomNavigationTab title='Activities' icon={ActivityIcon}/>
      <BottomNavigationTab title='Calendar' icon={CalendarIcon}/>
      <BottomNavigationTab title='Profile' icon={UserIcon}/>
    </BottomNavigation>
    </>
  );
};
import React from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import { Text, Divider, Layout, TopNavigation, Icon } from '@ui-kitten/components';
import { AvatarProfile } from '../components/Avatar';
import { ButtonMain } from '../components/Button';
import { PopupCardButton } from '../components/PopupCard';
import { ToggleSimpleUsageShowcase } from '../components/Toggle';
import { ActionListItem } from '../components/ActionList';
// import { StyleSheet, View } from 'react-native';

export const ProfileScreen = () => {


  return (
    <SafeAreaView style={{ flex: 1}}>
      <Divider />
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFFEF4'}}>
        <AvatarProfile />
        <Text category='h4' style={{color: 'black'}}>Username</Text>
        <ButtonMain text='Edit Account' ar={ChevronRightIcon}></ButtonMain>
        <View style={{margin: 10}}>
            <Text category='s2'>Content</Text>
            <ButtonMain text='Favourites' al={FaveIcon} ar={ChevronRightIcon} sz='small' stat='basic'/>
            <Text category='s2'>Preferences</Text>
            <ActionListItem tle='Notification' al={NotifIcon} ar={ToggleSimpleUsageShowcase}></ActionListItem>
            <ActionListItem tle='Dark Mode' al={DarkIcon} ar={ToggleSimpleUsageShowcase}></ActionListItem>
            <ActionListItem tle='Colorblind Mode' al={ColorblindIcon} ar={ToggleSimpleUsageShowcase}></ActionListItem>
        </View>
        <PopupCardButton />
      </Layout>
    </SafeAreaView>
  );
};

const ChevronRightIcon = (props) => (
    <Icon {...props} name='chevron-right'/>
  );

const FaveIcon = (props) => (
    <Icon {...props} name='bookmark'/>
  );

const NotifIcon = (props) => (
    <Icon {...props} name='bell'/>
  );

const DarkIcon = (props) => (
    <Icon {...props} name='moon'/>
  );

const ColorblindIcon = (props) => (
    <Icon {...props} name='eye'/>
  );
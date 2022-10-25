import React from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import { Text, Divider, Layout, Button, Icon } from '@ui-kitten/components';
import { AvatarProfile } from '../components/Avatar';
import { ButtonMain } from '../components/Button';
import { PopupCardButton } from '../components/PopupCard';
import { ToggleButton } from '../components/Toggle';
import { ActionListItem } from '../components/ActionList';

export const ProfileScreen = ({ navigation }) => {


  return (
    <SafeAreaView style={{ flex: 1}}>
      <Divider />
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFFEF4'}}>
        <AvatarProfile />
        <Text category='h5' style={{color: 'black'}}>Michelle Smith</Text>
        <ButtonMain func={() => navigation.push('Account Settings')} text='Edit Account' ar={ChevronRightIcon}></ButtonMain>
        <View style={{margin: 10}}>
            <Text category='s2'>Content</Text>
            <ButtonMain func={() => navigation.push('Favourites')} text='Favourites' al={FaveIcon} ar={ChevronRightIcon} sz='small' stat='basic'/>
            <Text category='s2'>Preferences</Text>
            <ActionListItem func={() => navigation.push('Notifications')} styl={actionstyle} tle='Notification' al={NotifIcon} ar={ChevronRightIcon}></ActionListItem>
            <ActionListItem styl={actionstyle} tle='Dark Mode' al={DarkIcon} ar={ToggleButton}></ActionListItem>
            <ActionListItem styl={actionstyle} tle='Colorblind Mode' al={ColorblindIcon} ar={ToggleButton}></ActionListItem>
        </View>
        <PopupCardButton btntxt='Log Out' txt='Come back soon 😻' subtxt='Are you sure you want to log out?'/>
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

const actionstyle = StyleSheet.create({
  backgroundColor: '#FFF3D3',
  borderRadius: '25%',
  marginTop: "2%",
  marginBottom: '2%',
  width: "80%"
});

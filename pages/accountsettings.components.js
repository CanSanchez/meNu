import React from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import { Text, Divider, Layout, TopNavigation, Icon } from '@ui-kitten/components';
import { AvatarProfile } from '../components/Avatar';
import { ButtonMain } from '../components/Button';
import { PopupCardButton } from '../components/PopupCard';
import { ActionListItem } from '../components/ActionList';
// import { Link } from '@react-navigation/native';
// import { StyleSheet, View } from 'react-native';

export const AccountSettingsScreen = ({ navigation }) => {


  return (
    <SafeAreaView style={{ flex: 1}}>
      <Divider />
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFFEF4'}}>
        <AvatarProfile />
        <Text category='s2' style={{color: 'black', textDecorationLine: 'underline'}}>Update Profile Photo</Text>
        <View style={{margin: 10}}>
            <Text category='s2'>Account Information</Text>
            <ActionListItem styl={classicstyle} tle='Full Name' desc='Michelle Smith' ar={ChevronRightIcon}></ActionListItem>
            <ActionListItem styl={classicstyle} tle='Date of Birth' desc='November 27, 1975' ar={ChevronRightIcon}></ActionListItem>
            <ActionListItem styl={classicstyle} tle='E-mail' desc='mich_smith@gmail.com' ar={ChevronRightIcon}></ActionListItem>
            <ActionListItem styl={classicstyle} tle='Password' desc='********' ar={ChevronRightIcon}></ActionListItem>
        </View>
        <PopupCardButton btntxt='Delete Account' txt='We will miss you 🥺' subtxt='Are you sure you want to delete your account?'/>
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
  
  const classicstyle = StyleSheet.create({
    backgroundColor: '#FFF3D3',
    marginTop: "2%",
    marginBottom: '2%',
    width: "80%"
  });
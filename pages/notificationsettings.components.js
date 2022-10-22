import React from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import { Text, Divider, Layout, TopNavigation, Icon } from '@ui-kitten/components';
import { AvatarProfile } from '../components/Avatar';
import { ButtonMain } from '../components/Button';
import { PopupCardButton } from '../components/PopupCard';
import { ToggleSimpleUsageShowcase } from '../components/Toggle';
import { ActionListItem } from '../components/ActionList';
// import { StyleSheet, View } from 'react-native';

export const NotificationScreen = () => {


  return (
    <SafeAreaView style={{ flex: 1}}>
      <Divider />
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFFEF4'}}>
      <Text category='h5'>Notification Preferences</Text>
        <View style={{margin: 10}}>
            <ActionListItem styl={actionstyle} tle='Allow Notifications' ar={ToggleSimpleUsageShowcase}></ActionListItem>
            <ActionListItem styl={actionstyle} tle='Sounds' ar={ToggleSimpleUsageShowcase}></ActionListItem>
            <ActionListItem styl={actionstyle} tle='Badges' ar={ToggleSimpleUsageShowcase}></ActionListItem>
        </View>
      </Layout>
    </SafeAreaView>
  );
};

const actionstyle = StyleSheet.create({
  backgroundColor: '#FFF3D3',
  borderRadius: '25%',
  marginTop: "2%",
  marginBottom: '2%',
  width: "80%"
});
import React from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import { Text, Divider, Layout, Button, Icon } from '@ui-kitten/components';
import { AvatarProfile } from '../components/Avatar';
import { ButtonMain } from '../components/Button';
import { PopupCardButton } from '../components/PopupCard';
import { ToggleButton } from '../components/Toggle';
import { ActionListItem } from '../components/ActionList';
import { TopNavigationSimpleUsageShowcase } from '../components/TopNav';
import { useAuth } from '../contexts/AuthContext';
import { useFonts } from 'expo-font';

export const ProfileScreen = ({ navigation }, props) => {

  const { logout } = useAuth()

  const logOut = async () => {
    try {
        await 
        logout()
    }  catch (err) {
        console.error(err);
        alert(err)
      }
}

const [loaded] = useFonts({
  Poppins: require('../assets/fonts/Poppins-Regular.ttf'),
  PoppinsBold: require('../assets/fonts/Poppins-Bold.ttf'),
  PoppinsMedium: require('../assets/fonts/Poppins-Medium.ttf')
});

if (!loaded) {
  return null;
}

  return (
    <SafeAreaView style={{ flex: 1}}>
      
      <TopNavigationSimpleUsageShowcase/>
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFFFFF'}}>
        <AvatarProfile />
        <Text category='h5' style={{color: 'black', fontFamily:'PoppinsMedium'}}>Michelle Smith</Text>
        <ButtonMain func={() => navigation.push('Account Settings')} text='Edit Account' ar={ChevronRightIcon}></ButtonMain>
        <View style={{margin: 10}}>
            <Text category='s2'>Content</Text>
            <ButtonMain func={() => navigation.push('Favourites')} text='Favourites' al={FaveIcon} ar={ChevronRightIcon} sz='small' stat='basic'/>
            <Text category='s2'>Preferences</Text>
            <ActionListItem func={() => navigation.push('Notifications')} styl={actionstyle} tle='Notification' al={NotifIcon} ar={ChevronRightIcon}></ActionListItem>
            <ActionListItem styl={actionstyle} tle='Dark Mode' al={DarkIcon} ar={ToggleButton}></ActionListItem>
            <ActionListItem styl={actionstyle} tle='Colorblind Mode' al={ColorblindIcon} ar={ToggleButton}></ActionListItem>
            <Button onPress={props.toggleTheme}>Switch Theme</Button>
        </View>
        <Button onPress={logOut}>Log Out</Button>
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

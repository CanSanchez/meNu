
import React from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import { Text, Divider, Layout, Button, Icon, ApplicationProvider } from '@ui-kitten/components';

import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, StyleSheet, KeyboardAvoidingView, Image } from 'react-native';
import { Text, Divider, Layout, Button, Icon, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { AvatarProfile } from '../components/Avatar';
import { ButtonMain } from '../components/Button';
import { PopupCardButton } from '../components/PopupCard';
import { ToggleButton } from '../components/Toggle';
import { ActionListItem } from '../components/ActionList';
import { TopNav } from '../components/TopNav';
import { useFonts } from 'expo-font';

import { default as theme } from '../styles/theme.json';
import { HeaderTitle } from '../components/Header';
import * as eva from '@eva-design/eva';

import { useNavigation, DrawerActions } from "@react-navigation/native";



import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import { useAuth } from '../contexts/AuthContext';

export const ProfileScreen = (props) => {

  //getting data from backend
  const { currentUser, logout } = useAuth()
  const db = getFirestore();
  const [user,setUser] = useState([]);

  const logOut = async () => {
    try {
        await 
        logout()
    }  catch (err) {
        console.error(err);
        alert(err)
      }
}

useEffect(() => {

  const fetchUser = async () => {

    const q = query(collection(db, "users"), where("email", '==', currentUser.email));

        const querySnapshot = await getDocs(q);
  
        const dbuser = [];

    querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
    dbuser.push({
      ...doc.data(),
      id:doc.id
    });
  });
  setUser([
    ...dbuser
  ]);
};
  fetchUser();
  // alert(user.map(o=>o.lastName))
}, []);

const [loaded] = useFonts({
  Poppins: require('../assets/fonts/Poppins-Regular.ttf'),
  PoppinsBold: require('../assets/fonts/Poppins-Bold.ttf'),
  PoppinsMedium: require('../assets/fonts/Poppins-Medium.ttf')
});

if (!loaded) {
  return null;
}


  return ( <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
    
  <Layout style={{flex:1}}>

    <SafeAreaView style={{ flex: 1, backgroundColor:"#FFFEF4"}}>
      
      <TopNavigationSimpleUsageShowcase/>
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFFEF4'}}>

//Notification & favourites drawer navigation
const navigation = useNavigation();

//right rendering of top navigation
const renderDrawerAction = () => (
  <>
    <TopNavigationAction 
      icon={NotIcon} 
      onPress={() => 
      navigation.dispatch(DrawerActions.openDrawer())}
    />
    <TopNavigationAction 
      icon={SaveIcon} 
      onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
    />
  </>
)

//left rendering of top navigation
const renderLefttActions = ({navigation}) => (
    <>
    <TopNavigationAction 
    icon={LogoPrimary}
    />
    </>
)


  return (
    <SafeAreaView style={styles.layout}>
      <TopNavigation 
        alignment="center"
        accessoryRight={renderDrawerAction}
        accessoryLeft={renderLefttActions}
        style={{
          position: 'fixed',
          width: '100%'
        }} 
        />
      <Layout style={styles.container}>
      

        <AvatarProfile />
      {user.map(o=>    
        <Text category='h5' style={{color: 'black', fontFamily:'PoppinsMedium'}}>{o.name} {o.lastName}</Text>
      )}
        <ButtonMain func={() => navigation.push('Account Settings')} text='Edit Account' ar={ChevronRightIcon}></ButtonMain>
        <View style={{margin: 10}}>
            <Text category='s2'>Content</Text>
            <ButtonMain func={() => navigation.push('Favourites')} text='Favourites' al={FaveIcon} ar={ChevronRightIcon} sz='small' stat='basic'/>
            <Text category='s2'>Preferences</Text>

            <ActionListItem func={() => navigation.push('Notifications')} styl={actionstyle} tle='Notification' al={NotifIcon} ar={ChevronRightIcon}></ActionListItem>
            <ActionListItem styl={actionstyle} tle='Dark Mode' al={DarkIcon} ar={ToggleButton}></ActionListItem>
            <ActionListItem styl={actionstyle} tle='Colorblind Mode' al={ColorblindIcon} ar={ToggleButton}></ActionListItem>
            <Button style={{borderRadius:30}} onPress={props.toggleTheme}>Switch Theme</Button>
        </View>
        <Button style={{borderRadius:30}} onPress={logOut}>Log Out</Button>
      </Layout>
    </SafeAreaView>
    </Layout>
    </ApplicationProvider>

            <ActionListItem func={() => navigation.push('Notifications')} tle='Notification' al={NotifIcon} ar={ChevronRightIcon}></ActionListItem>
            <ActionListItem tle='Dark Mode' al={DarkIcon} ar={ToggleButton}></ActionListItem>
            <ActionListItem tle='Colorblind Mode' al={ColorblindIcon} ar={ToggleButton}></ActionListItem>
            {/* <Button onPress={props.toggleTheme}>Switch Theme</Button> */}
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

const styles = StyleSheet.create({
  layout:{
    flex: 1,
    flexDirection: 'column',
    alignItems:'center',
    width: '100%',
    backgroundColor: '#FFFEF4'
  },
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
    // backgroundColor: 'transparent'
}
  
});

//icon rendering
const NotIcon = (props) => (
  <Icon {...props} name='bell' fill="#E88C68" />
);

const SaveIcon = (props) => (
  <Icon {...props}  name="bookmark" fill="#E88C68" />
);

const LogoPrimary = ({navigation}) => (
  <View style={{paddingLeft: 15}}>
    <Image 
        style={{  width: 26 , height: 35, objectFit: 'cover' }}
        source={require('../assets/logo/Logo.png')}
      />
  </View>
);

import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { Text, Divider, Layout, Button, Icon } from '@ui-kitten/components';
import { AvatarProfile } from '../components/Avatar';
import { ButtonMain } from '../components/Button';
import { PopupCardButton } from '../components/PopupCard';
import { ToggleButton } from '../components/Toggle';
import { ActionListItem } from '../components/ActionList';
import { TopNav } from '../components/TopNav';
import { useFonts } from 'expo-font';

import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import { useAuth } from '../contexts/AuthContext';

export const ProfileScreen = ({ navigation }, props) => {

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

  return (
    <SafeAreaView style={styles.layout}>
      <TopNav />
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
    backgroundColor: '#FFFEF4'
  },
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent'
}
  
});


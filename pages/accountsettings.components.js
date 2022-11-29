import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import { Text, Divider, Layout, TopNavigation, Icon } from '@ui-kitten/components';
import { AvatarProfile } from '../components/Avatar';
import { ButtonMain } from '../components/Button';
import { PopupCardButton } from '../components/PopupCard';
import { ActionListItem } from '../components/ActionList';
// import { Link } from '@react-navigation/native';
// import { StyleSheet, View } from 'react-native';

import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import { useAuth } from '../contexts/AuthContext';

export const AccountSettingsScreen = ({ navigation }) => {

  //getting data from backend
  const { currentUser } = useAuth()
  const db = getFirestore();
  const [user,setUser] = useState([]);

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

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFEF4' }}>
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <AvatarProfile />
        <Text category='s2' style={{color: 'black', textDecorationLine: 'underline'}}>Update Profile Photo</Text>
        <View style={{margin: 10}}>
            <Text category='s2'>Account Information</Text>
            {user.map(o=>   
            <ActionListItem styl={classicstyle} tle='Full Name' desc={`${o.name} ${o.lastName}`} ar={ChevronRightIcon}></ActionListItem>
            )}
            {user.map(o=>  
            <ActionListItem styl={classicstyle} tle='E-mail' desc={`${o.email}`} ar={ChevronRightIcon}></ActionListItem>
            )}
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
    // backgroundColor: '#FFF3D3',
    marginTop: "2%",
    marginBottom: '2%',
    width: "80%"
  });
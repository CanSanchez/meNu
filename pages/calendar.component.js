import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, KeyboardAvoidingView, Text } from 'react-native';
import { Button, Divider, Layout, Icon, View } from '@ui-kitten/components';
import { CalendarSimpleUsageShowcase } from '../components/Calendar';
import { Reminders } from '../components/Reminders';
import { CalendarCard } from '../components/CalendarCard';
import { TopNav } from '../components/TopNav';
import { ButtonMain } from '../components/Button';
import { StyleSheet } from 'react-native';


import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import { useAuth } from '../contexts/AuthContext';
import { TouchableOpacity } from 'react-native-gesture-handler';

const PlusIcon = (props) => (
  <Icon {...props} name='plus-circle-outline' fill="#434343" />
);


export const CalendarScreen = () => {

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(current => !current);
}

//getting data from firebase auth
const { currentUser } = useAuth()
const db = getFirestore();
const [user,setUser] = useState([]);



useEffect(() => {
  //fetching user
  const fetchUser = async () => {
    //fetching only user firestore data that matches auth email
    const q = query(collection(db, "users"), where("email", '==', currentUser.email));

    const querySnapshot = await getDocs(q);
    //locally stores fetched data from firestorage
    const dbuser = [];

    querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      dbuser.push({
        id:doc.id,
        ...doc.data()
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
    <KeyboardAvoidingView 
        style={styles.container}
        behavior="padding"
    >
    <SafeAreaView style={{backgroundColor: '#FFFEF4'}}>
       <TopNav />   
    <ScrollView scrollEventThrottle={200}>
      <Layout style={styles.layout}>
        
        <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <CalendarSimpleUsageShowcase />
          <Layout
            style={styles.addBtn}
            onPress={handleClickOpen}>
            <Icon 
              name="plus-circle-outline" 
              fill="#434343"/>
              <Text>Add to Calendar</Text>
          </Layout>
           {
           open?<CalendarCard />:null
           }  
        </Layout>
        {user.map(o=>  
            <Reminders
             path={`users/${o.id}/reminders`}
            />
            )}
    </Layout>
  </ScrollView>
  </SafeAreaView>
  </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  layout:{
    flex: 1,
    flexDirection: 'column',
    alignItems:'center',
    paddingTop:30,
    backgroundColor: '#FFFEF4'
  },
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFEF4'
  },
  addBtn: {
    width: 'auto',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  } 
  
})

// style={{width:23, height:23, paddingLeft:725, marginBottom:15}}
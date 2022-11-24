
import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { Button, Divider, Layout, Icon, View, ApplicationProvider  } from '@ui-kitten/components';
import { CalendarSimpleUsageShowcase } from '../components/Calendar';

import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, KeyboardAvoidingView, Text, Image } from 'react-native';
import { Button, Divider, Layout, Icon, View, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { Calendar } from '@ui-kitten/components';

import { Reminders } from '../components/Reminders';
import { CalendarCard } from '../components/CalendarCard';
import { TopNav } from '../components/TopNav';
import { ButtonMain } from '../components/Button';

import { useState } from 'react';
import * as eva from '@eva-design/eva';
import { default as theme } from '../styles/theme.json';

import { StyleSheet } from 'react-native';


import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import { useAuth } from '../contexts/AuthContext';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { useNavigation, DrawerActions } from "@react-navigation/native";


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

const [date, setDate] = React.useState(new Date());


  return ( <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
    
      
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFFEF4' }}>
      

      <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFEF4" }}>
         <TopNavigationSimpleUsageShowcase />   
      <ScrollView>
        
        <Layout style={{paddingTop:40, backgroundColor:'#FFFEF4'}}>
        
          <Icon onPress={handleClickOpen} name="plus-circle-outline" fill="#434343" style={{width:23, height:23, paddingLeft:725, marginBottom:15}} />
        </Layout>
        <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'#FFFEF4' }}>
          
            <CalendarSimpleUsageShowcase />
        
           {
           open?<CalendarCard />:null
           }
       
            
        

  return (
    <KeyboardAvoidingView 
        style={styles.container}
        behavior="padding"
    >
    <SafeAreaView style={styles.layout}>
    <TopNavigation 
        alignment="center"
        accessoryRight={renderDrawerAction}
        // accessoryLeft={renderLefttActions}
        style={{
          position: 'fixed',
          width: '100%'
        }} /> 
    <ScrollView scrollEventThrottle={200}>
      <Layout style={styles.container}>
        
        <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Calendar
            style={{borderRadius: 30}}
            date={date}
            onSelect={nextDate => setDate(nextDate)}
          />
          <Text category='h6' style={{paddingTop: '5%'}}>
            Selected date: {date.toDateString('en-US')}
          </Text>
          <Button
            accessoryLeft={PlusIcon}
            style={styles.addBtn}
            onPress={handleClickOpen}>
              <Text>Add to Calendar</Text>
          </Button>
           { user.map(o=>
           open? <CalendarCard 
                    path={`users/${o.id}/reminders`}
                    date={date}
                    /> :null
           )}
           

        </Layout>
        {user.map(o=>  
            <Reminders
             path={`users/${o.id}/reminders`}
            />
        )}
    </Layout>

  </ApplicationProvider>

  </ScrollView>
  </SafeAreaView>
  </KeyboardAvoidingView>

  );
};

const styles = StyleSheet.create({
  layout:{
    flex: 1,
    width: '100%',
    minHeight: '100%', 
    flexDirection: 'column',
    alignItems:'center',
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
    alignItems: 'center',
    marginTop: 20
  } 
  
})

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

const PlusIcon = (props) => (
  <Icon {...props} name='plus-circle-outline' />
);

// style={{width:23, height:23, paddingLeft:725, marginBottom:15}}
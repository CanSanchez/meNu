import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, View, KeyboardAvoidingView } from 'react-native';
import { Icon, Button, Divider, Layout, TopNavigation, Card, TopNavigationAction } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';
import { HeaderTitle } from '../components/Header';

import { TextCard } from '../components/TextCard';
import { Image } from 'react-native';
import { RecActivities } from '../components/RecActivities';
import { Reminders } from '../components/Reminders';
import LottieView from 'lottie-react-native';
import { useRef } from 'react';
import { useNavigation, DrawerActions } from "@react-navigation/native";

import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import { useAuth } from '../contexts/AuthContext';


export const HomeScreen = () => {

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

//navigation
  const navigation = useNavigation();
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

    const renderLefttActions = ({navigation}) => (
      <>
      <TopNavigationAction 
      icon={LogoPrimary}
      />
      </>
    )

  return (
    <KeyboardAvoidingView 
        style={styles.container}
        behavior="padding"
    >
      <SafeAreaView style={{backgroundColor: '#FFFEF4'}}>
      <TopNavigation 
      alignment="center"
      accessoryRight={renderDrawerAction}
      accessoryLeft={renderLefttActions}
      style={{
        backgroundColor: 'transparent',
        position: 'fixed'
      }} 
      />
      <ScrollView scrollEventThrottle={200}>
        
        <Layout style={styles.layout}>
          
        {user.map(o=>    
          <HeaderTitle headertext={`Welcome back, ${o.name}`}/>
        )}
        <View style={styles.animationContainer}/>
          {/* <LottieView
            autoPlay
            ref={animation}
            style={{
              width: 150,
              height: 150
              
            }}
            source={require('../assets/animations/wavingbear.json')}
          /> */}
          <TextCard />
        
        
          <RecActivities/>
          <Reminders />
          
        </Layout>
        
      </ScrollView>
      </SafeAreaView>
      </KeyboardAvoidingView>
)

}

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
}
  
})

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
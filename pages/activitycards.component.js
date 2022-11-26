import React, { useState, useEffect } from 'react';
import * as eva from '@eva-design/eva';
import { default as theme } from '../styles/theme.json';
import { SafeAreaView, StyleSheet, ScrollView, View, Text } from 'react-native';
import { Button, ButtonGroup, Divider, Layout, Icon, ApplicationProvider } from '@ui-kitten/components';
import { ActivityPopup } from '../components/ActivityPopup';
import { FilterButtons } from '../components/FilterButtons';

import Swiper from 'react-native-swiper';
import { CalendarCard } from '../components/CalendarCard';



import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import { useAuth } from '../contexts/AuthContext';

export const ActivityCardScreen = ({ navigation, route }) => {

  //getting data from firebase auth
  const { currentUser } = useAuth()
  const db = getFirestore();
  const [user,setUser] = useState([]);

  // console.log("activity params", route.params)
  
  const [activities,setActivities] = useState([]);


  useEffect(() => {

    
    const fetchActivities = async () => {

      const q = query(collection(db, "activities"), where("activityCategory", '==', route.params.cat));

      const querySnapshot = await getDocs(q);
    
      const dbactivities = [];

      querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        dbactivities.push({
          ...doc.data(),
          id:doc.id
        });
      });
      setActivities([
        ...dbactivities
      ]);
    };
    fetchActivities();
    // alert(activities.map(o=>o.category))

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
  }, []);

    const [open, setOpen] = useState(false);
    const [date, setDate] = React.useState(new Date());


    const handleClickOpen = () => {
      setOpen(current => !current);
    }


  return (
    <SafeAreaView style={styles.layout}>
      <Layout style={styles.container}>
        <FilterButtons />
        <Text style={styles.title}>{route.params.cat} Activities</Text>
        <ScrollView horizontal={true} style={{margin:0}}>
            {activities.map(o=>
                <ActivityPopup
                func={handleClickOpen}
                key={Math.random()}
                source={{uri:o.activityImage}}
                fronttxt={o.activityName}
                duration={o.activityDuration}
                list1={o.activityDescription}
                ></ActivityPopup>
            )}
        </ScrollView>
        { user.map(o=>
           open? <CalendarCard 
                    path={`users/${o.id}/reminders`}
                    date={date}
                    /> :null
        )}
      </Layout>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  layout:{
    flex: 1,
    flexDirection: 'column',
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor: '#FFFEF4',
  },
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  title: {
    fontSize: '20%',
    fontWeight: 'bold'
  }
})
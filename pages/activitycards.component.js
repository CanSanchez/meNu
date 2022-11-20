import React, { useState, useEffect } from 'react';
import * as eva from '@eva-design/eva';
import { default as theme } from '../styles/theme.json';
import { SafeAreaView, StyleSheet, ScrollView, View } from 'react-native';
import { Button, ButtonGroup, Divider, Layout, Icon, ApplicationProvider } from '@ui-kitten/components';
import { ActivityPopup } from '../components/ActivityPopup';
import { FilterButtons } from '../components/FilterButtons';

import { collection, getDocs, getFirestore } from "firebase/firestore";



export const ActivityCardScreen = ({ navigation }) => {

  const db = getFirestore();
  const [activities,setActivities] = useState([]);

  useEffect(() => {


    const fetchActivities = async () => {

          const querySnapshot = await getDocs(collection(db, "activities"));
    
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
  }, []);

    
  return (
    <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
      <SafeAreaView style={{ flex: 1 }}>
      <Divider/>
      <Layout style={{flex:1, justifyContent:"center", alignItems:"center"}}>
        <FilterButtons style={{flex:1}}/>
      <ScrollView horizontal={true}>
        <Layout style={{flex: 1, flexDirection:"row", height: 300}}>
          <Layout style={styles.cont}>
          {activities.map(o=>
              <ActivityPopup
              source={{uri:o.activityImage}}
              fronttxt={o.activityName}
              ></ActivityPopup>
          )}
          </Layout>
          
          <Layout style={styles.cont}>
          {activities.map(o=>
              <ActivityPopup
                source={{uri:o.activityImage}}
                fronttxt={o.activityName}
                list1='Increases core strength'
                list2='Increases energy'
                list3='Decreases stress'
                list4='Reduces menstrual pain'
                need='Pilates mat'
              >  
              </ActivityPopup>
)}
          </Layout>

          <Layout style={styles.cont}>
             <ActivityPopup
                source={require('../assets/images/stretching.jpeg')}
                fronttxt='Stretching'
                list1='Improves achiness'
                list2='Decreases your risk of injuries'
                list3='Increases muscle blood flow'
                list4='Helps you relax'
                need='Nil'
             >
             </ActivityPopup>
          </Layout>

        </Layout>
          
      </ScrollView>
      </Layout>
     </SafeAreaView>
    </ApplicationProvider>
  );
}

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    marginLeft: 35,
  }
})
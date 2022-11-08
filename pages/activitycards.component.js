import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import { Button, ButtonGroup, Divider, Layout, Icon } from '@ui-kitten/components';
import { ActivityPopup } from '../components/ActivityPopup';
import { FilterButtons } from '../components/FilterButtons';

export const ActivityCardScreen = ({ navigation }) => {


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Divider/>
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <FilterButtons></FilterButtons>
      <ScrollView horizontal={true}>
      <Layout style={styles.layout}>
        <ActivityPopup></ActivityPopup>
      </Layout>
      <Layout style={styles.layout}>
        <ActivityPopup
        source={require('../assets/images/walk.jpeg')}
        fronttext='Take a Walk'
        h4='Take a Walk'
        list1='Improves circulation'
        list2='Strengthens your bones'
        list3='Increases energy levels'
        list4='Lightens your mood'
        needs='Walking shoes and water'></ActivityPopup>
      </Layout>
      <Layout style={styles.layout}>
        <ActivityPopup
        source={require('../assets/images/cooking.jpeg')}
        fronttext='Cooking'
        h4='Cooking'
        list1='Improves management skills'
        list2='Enhances creativity'
        list3='Reduces stress'
        list4='Makes you happy'
        needs='Cooking tools and recipe'></ActivityPopup>
      </Layout>
      </ScrollView>
    </Layout>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
 group: {
  padding: 10
 },
 layout: {
  display: "flex",
  justifyContent: "",
  height: 350,
  padding: 35,
  
 }
})
import React, { useState } from 'react';
import * as eva from '@eva-design/eva';
import { default as theme } from '../styles/theme.json';
import { SafeAreaView, StyleSheet, View, Image, KeyboardAvoidingView} from 'react-native';
import { Button, Divider, Layout, TopNavigation, Icon, ApplicationProvider} from '@ui-kitten/components';
import { CategoryButton } from '../components/CategoryButton';
import { FilterButtons } from '../components/FilterButtons';
import { ActivityPopup } from '../components/ActivityPopup';
import { TopNav, TopNavigationSimpleUsageShowcase } from '../components/TopNav';
import { ScrollView } from 'react-native-gesture-handler';
import Svg from 'react-native-svg';

import { collection, getDocs, getFirestore } from "firebase/firestore";


export const ActivityScreen = ({ navigation }) => {

  const db = getFirestore();

  const handleSubmit = async (cat) => {
    console.log(cat)
    navigation.push('Activity Card', {cat})
  }

  return (
      <SafeAreaView style={styles.layout}>
        <TopNav />
        <Layout style={styles.layout}>
        <CategoryButton func={() => handleSubmit('Indoor')} stat='info' ar={StarIcon}></CategoryButton>
        <CategoryButton func={() => handleSubmit('Outdoor')} stat='success' text='Outdoor' ar={HeartIcon}></CategoryButton>
        <CategoryButton func={() => handleSubmit('Creative')} stat='warning' text='Creative' ar={StarIcon}></CategoryButton>
        <CategoryButton func={() => handleSubmit('Self-Care')} stat='danger' text='Self Care' ar={StarIcon}></CategoryButton>
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
    paddingTop:30,
    backgroundColor: '#FFFEF4'
  },
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FDF1E1'
}
  
})

const StarIcon = (props) => (
  <Icon {...props} name='star'/>
);

const HeartIcon = (props) => (
  <Icon {...props} name='heart'/>
);


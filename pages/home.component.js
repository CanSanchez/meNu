import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { Button, Divider, Layout, TopNavigation } from '@ui-kitten/components';
import { TopNavigationSimpleUsageShowcase } from '../components/TopNav';
import { StyleSheet } from 'react-native';
import { HeaderTitle } from '../components/Header';

import { TextCard } from '../components/TextCard';
import { Image } from 'react-native';
import { RecActivities } from '../components/RecActivities';
import { Reminders } from '../components/Reminders';


export const HomeScreen = ({navigation}) => {


  return (
    <><SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <ScrollView scrollEventThrottle={200}>
        <TopNavigationSimpleUsageShowcase />
        <Layout style={styles.layout}>
          
          
          <HeaderTitle headertext='Welcome back, Michelle!'/>
          <Image style={{ width: 69, height: 60, margin: 10 }} source={require('../assets/Bearface.png')} />
          <TextCard />
        
          <RecActivities />
          <Reminders />
          
        </Layout>
        
      </ScrollView>
      </SafeAreaView>
    </>
)

}

const styles = StyleSheet.create({
  layout:{
    flex: 1,
    flexDirection: 'column',
    alignItems:'center',
    paddingTop:30,
    backgroundColor: '#FFFFFF'
  }
  
})
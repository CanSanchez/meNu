import React from 'react';
import { SafeAreaView, ScrollView, View, KeyboardAvoidingView } from 'react-native';
import { Button, Divider, Layout, TopNavigation, Card } from '@ui-kitten/components';
import { TopNav } from '../components/TopNav';
import { StyleSheet } from 'react-native';
import { HeaderTitle } from '../components/Header';

import { TextCard } from '../components/TextCard';
import { Image } from 'react-native';
import { RecActivities } from '../components/RecActivities';
import { Reminders } from '../components/Reminders';
import LottieView from 'lottie-react-native';
import { useRef } from 'react';
import { useEffect } from 'react';
import { ListDividersShowcase } from '../components/List/NotificationList';

export const NotificationScreenPage = ({navigation}) => {

  return (
    <KeyboardAvoidingView 
        style={styles.container}
        behavior="padding"
    >
      <SafeAreaView style={{backgroundColor: '#FDF1E1'}}>
      <TopNav />
      <ScrollView scrollEventThrottle={200}>
        
        <Layout style={styles.layout}>
          
          
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
    backgroundColor: '#FDF1E1'
  },
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FDF1E1'
}
  
})
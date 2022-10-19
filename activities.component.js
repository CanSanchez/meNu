import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Button, Divider, Layout, TopNavigation } from '@ui-kitten/components';
import { ActivityCard } from './components/activity card';

export const ActivityScreen = () => {


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title='MyApp' alignment='center'/>
      <Divider/>
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityCard></ActivityCard>
      </Layout>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  
})

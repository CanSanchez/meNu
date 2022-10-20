import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Button, Divider, Layout, TopNavigation } from '@ui-kitten/components';
import { ActivityCard } from './components/activitycard';
import { CategoryButoon } from './components/categorybutton';
import { ActivityCard } from './components/ActivityCard';

export const ActivityScreen = () => {


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Divider/>
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <CategoryButoon text='Indoor'></CategoryButoon>
      <CategoryButoon text='Outdoor'></CategoryButoon>
      <CategoryButoon text='Creative'></CategoryButoon>
      <CategoryButoon text='Self Care'></CategoryButoon>
      </Layout>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  
})

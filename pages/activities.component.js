import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Button, Divider, Layout, TopNavigation } from '@ui-kitten/components';
import { CategoryButoon } from '../components/categorybutton';
import { TopNavigationSimpleUsageShowcase } from '../components/TopNav';

export const ActivityScreen = () => {


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Divider/>
      <TopNavigationSimpleUsageShowcase />
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

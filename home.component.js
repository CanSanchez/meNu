import React from 'react';
import { SafeAreaView } from 'react-native';
import { Button, Divider, Layout, TopNavigation } from '@ui-kitten/components';
import { InputSimpleUsageShowcase } from './components/form'
import { ButtonMain } from './components/button'
import { TutorialCard } from './components/TutorialCard';
import { TopNavigationSimpleUsageShowcase } from './components/TopNav';
import { StyleSheet } from 'react-native';


export const HomeScreen = () => {


  return (
    <SafeAreaView style={{ flex: 1}}>
      <TopNavigationSimpleUsageShowcase />

      <Divider/>
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFFEF4' }}>
        <TutorialCard />
        <InputSimpleUsageShowcase />
        <ButtonMain />
        
      </Layout>
    </SafeAreaView>
  );
};


import React from 'react';
import { SafeAreaView } from 'react-native';
import { Button, Divider, Layout, TopNavigation } from '@ui-kitten/components';
import { InputSimpleUsageShowcase } from '../components/Form'
import { ButtonMain } from '../components/Button'
import { TutorialCard } from '../components/TutorialCard/index.js';
import { TopNavigationSimpleUsageShowcase } from '../components/TopNav';
import { StyleSheet } from 'react-native';
import { HeaderTitle } from '../components/Header';

export const LoginScreen = () => {


  return (
    <SafeAreaView style={{ flex: 1}}>
      <TopNavigationSimpleUsageShowcase />

      <Layout style={{  flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFFEF4' }}>
        <HeaderTitle />
        <TutorialCard style={styles.card}/>
        <InputSimpleUsageShowcase />
        <ButtonMain />
        
      </Layout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  
})


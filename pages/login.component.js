import React from 'react';
import { SafeAreaView } from 'react-native';
import { Button, Divider, Layout, TopNavigation } from '@ui-kitten/components';
import { LoginForm } from '../components/Form'
import { ButtonMain } from '../components/Button'
import { TutorialCard } from '../components/TutorialCard/index.js';
import { TopNavigationSimpleUsageShowcase } from '../components/TopNav';
import { StyleSheet } from 'react-native';
import { HeaderTitle } from '../components/Header';
import { ScrollView } from 'react-native-gesture-handler';

export const LoginScreen = () => {


  return (
    <SafeAreaView style={{ flex: 1}}>
      

      <Layout style={{margin:100, flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TopNavigationSimpleUsageShowcase />
        <HeaderTitle category='h6'/>
        <TutorialCard style={styles.card}/>
        <LoginForm />
        <ButtonMain />
      </Layout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  
})


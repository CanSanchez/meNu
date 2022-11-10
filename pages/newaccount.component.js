import React from 'react';
import { SafeAreaView } from 'react-native';
import { Button, Divider, Layout, TopNavigation, Icon } from '@ui-kitten/components';
import { LoginForm } from '../components/Form'
import { ButtonMain } from '../components/Button'
import { TutorialCard } from '../components/TutorialCard/index.js';
import { TopNavigationSimpleUsageShowcase } from '../components/TopNav';
import { StyleSheet } from 'react-native';
import { HeaderTitle } from '../components/Header';


const UserIcon = (props) => (
  <Icon {...props} name='person-outline'/>
);

const PassIcon = (props) => (
  <Icon {...props} name='lock-outline'/>
);

export const CreateAccountScreen = ({navigation}) => {


  return (
    <SafeAreaView style={{ flex: 1}}>
    <TopNavigationSimpleUsageShowcase />
      <Layout style={{  flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFFFFF' }}>
       
        <HeaderTitle />
        <TutorialCard style={styles.card}/>
        <HeaderTitle  headertext='Create Account'/>
        <LoginForm />
        <ButtonMain text="Log In" func={() => navigation.push('Home')}/>
        
      </Layout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  
})
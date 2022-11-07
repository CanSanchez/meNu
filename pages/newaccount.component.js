import React from 'react';
import { SafeAreaView } from 'react-native';
import { Button, Divider, Layout, TopNavigation, Icon } from '@ui-kitten/components';
import { InputSimpleUsageShowcase } from '../components/Form'
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

      <Layout style={{  flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFFEF4' }}>
        <HeaderTitle />
        <TutorialCard style={styles.card}/>
        <HeaderTitle headertext='Create Account'/>
        <InputSimpleUsageShowcase />
        <InputSimpleUsageShowcase placeholder='Password'/>
        <ButtonMain text="Log In" func={() => navigation.push('Home')}/>
        
      </Layout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  
})
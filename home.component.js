import React from 'react';
import { SafeAreaView } from 'react-native';
import { Button, Divider, Layout, TopNavigation } from '@ui-kitten/components';
import { InputSimpleUsageShowcase } from './components/form'
import { ButtonMain } from './components/button'

export const HomeScreen = () => {


  return (
    <SafeAreaView style={{ flex: 1}}>
      <Divider />
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFFEF4' }}>
        <InputSimpleUsageShowcase />
        <InputSimpleUsageShowcase />
        <ButtonMain />
      </Layout>
    </SafeAreaView>
  );
};
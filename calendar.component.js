import React from 'react';
import { SafeAreaView } from 'react-native';
import { Button, Divider, Layout } from '@ui-kitten/components';
import { CalendarSimpleUsageShowcase } from './components/calendar';

export const CalendarScreen = () => {


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Divider/>
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <CalendarSimpleUsageShowcase />
      </Layout>
    </SafeAreaView>
  );
};
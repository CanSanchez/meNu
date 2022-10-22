import React from 'react';
import { SafeAreaView } from 'react-native';
import { Button, Divider, Layout } from '@ui-kitten/components';
import { CalendarSimpleUsageShowcase } from '../components/Calendar';

export const CalendarScreen = () => {

  return (
    <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFFEF4' }}>
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFEF4" }}>
      <Divider />
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <CalendarSimpleUsageShowcase />
      </Layout>
    </SafeAreaView>
    </Layout>
  );
};
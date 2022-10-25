import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { Button, Divider, Layout } from '@ui-kitten/components';
import { CalendarSimpleUsageShowcase } from '../components/Calendar';
import { Reminders } from '../components/Reminders';

export const CalendarScreen = () => {

  return (
    <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFFEF4' }}>
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFEF4" }}>
      <ScrollView>
      <Divider />
        <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <CalendarSimpleUsageShowcase />
        </Layout>
        <Reminders />
      </ScrollView>
    </SafeAreaView>
    </Layout>
  );
};
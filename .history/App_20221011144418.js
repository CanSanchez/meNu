import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ApplicationProvider, Button, Card, Layout, Text, Calendar } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { CalendarSimpleUsageShowcase } from './components/calendar';
import { BottomNavigationSimpleUsageShowcase } from './components/navbar';
import { InputSimpleUsageShowcase } from './components/form';
import { MainButton } from './components/button'

const HomeScreen = () => (
  <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text category='h1' style={{paddingBottom: '5%'}}>Calendar</Text>
    <CalendarSimpleUsageShowcase />
    <InputSimpleUsageShowcase />
    <InputSimpleUsageShowcase label='Last Name' />
    <MainButton />
  </Layout>
);

export default () => (
  <ApplicationProvider {...eva} theme={eva.dark}>
    <HomeScreen>
    </HomeScreen>
    <BottomNavigationSimpleUsageShowcase/>
  </ApplicationProvider>
);
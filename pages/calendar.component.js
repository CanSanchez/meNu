import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { Button, Divider, Layout, Icon } from '@ui-kitten/components';
import { CalendarSimpleUsageShowcase } from '../components/Calendar';
import { Reminders } from '../components/Reminders';
import { CalendarCard } from '../components/CalendarCard';
import { TopNavigationSimpleUsageShowcase } from '../components/TopNav';
import { ButtonMain } from '../components/Button';

const PlusIcon = (props) => (
  <Icon {...props} name='plus-circle-outline' fill="#434343" />
);


export const CalendarScreen = () => {

  return (
    <ScrollView scrollEventThrottle={200}>
      
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFFFFF' }}>
      

      <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
            
      <ScrollView>
        <TopNavigationSimpleUsageShowcase />
      <Layout style={{paddingTop:50}}>
      <ButtonMain func={() => setVisible(true)} text={btntxt} stat='danger' sz='tiny'/>
        <Icon name="plus-circle-outline" fill="#434343" style={{width:23, height:23, paddingLeft:700}} />
      </Layout>
        <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        
          <CalendarSimpleUsageShowcase />
        </Layout>
        <Reminders />
        <CalendarCard/>
      </ScrollView>
    </SafeAreaView>
    </Layout>
  </ScrollView>
  );
};
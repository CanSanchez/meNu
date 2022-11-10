import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { Button, Divider, Layout, Icon, View } from '@ui-kitten/components';
import { CalendarSimpleUsageShowcase } from '../components/Calendar';
import { Reminders } from '../components/Reminders';
import { CalendarCard } from '../components/CalendarCard';
import { TopNavigationSimpleUsageShowcase } from '../components/TopNav';
import { ButtonMain } from '../components/Button';
import { useState } from 'react';

const PlusIcon = (props) => (
  <Icon {...props} name='plus-circle-outline' fill="#434343" />
);


export const CalendarScreen = () => {

  const [open, setOpen] = useState(false);

  return (
    <ScrollView scrollEventThrottle={200}>
      
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFFFFF' }}>
      

      <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
            
      <ScrollView>
        <TopNavigationSimpleUsageShowcase />
        <Layout style={{paddingTop:40}}>
        
          <Icon onPress={()=>setOpen(true)} name="plus-circle-outline" fill="#434343" style={{width:23, height:23, paddingLeft:725, marginBottom:15}} />
        </Layout>
        <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          
            <CalendarSimpleUsageShowcase />
        
           {
           open?<CalendarCard />:null
           }
       
            
        
        </Layout>
      <Reminders />
        
      </ScrollView>
    </SafeAreaView>
    </Layout>
  </ScrollView>
  );
};
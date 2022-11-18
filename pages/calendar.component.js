import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { Button, Divider, Layout, Icon, View, ApplicationProvider  } from '@ui-kitten/components';
import { CalendarSimpleUsageShowcase } from '../components/Calendar';
import { Reminders } from '../components/Reminders';
import { CalendarCard } from '../components/CalendarCard';
import { TopNavigationSimpleUsageShowcase } from '../components/TopNav';
import { ButtonMain } from '../components/Button';
import { useState } from 'react';
import * as eva from '@eva-design/eva';
import { default as theme } from '../styles/theme.json';

const PlusIcon = (props) => (
  <Icon {...props} name='plus-circle-outline' fill="#434343" />
);


export const CalendarScreen = () => {

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(current => !current);
}

  return ( <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
    
      
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFFEF4' }}>
      

      <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFEF4" }}>
         <TopNavigationSimpleUsageShowcase />   
      <ScrollView>
        
        <Layout style={{paddingTop:40, backgroundColor:'#FFFEF4'}}>
        
          <Icon onPress={handleClickOpen} name="plus-circle-outline" fill="#434343" style={{width:23, height:23, paddingLeft:725, marginBottom:15}} />
        </Layout>
        <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'#FFFEF4' }}>
          
            <CalendarSimpleUsageShowcase />
        
           {
           open?<CalendarCard />:null
           }
       
            
        
        </Layout>
      <Reminders />
        
      </ScrollView>
    </SafeAreaView>
    </Layout>
  </ApplicationProvider>
  );
};
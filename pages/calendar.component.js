import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { Button, Divider, Layout, Icon, View } from '@ui-kitten/components';
import { CalendarSimpleUsageShowcase } from '../components/Calendar';
import { Reminders } from '../components/Reminders';
import { CalendarCard } from '../components/CalendarCard';
import { TopNav } from '../components/TopNav';
import { ButtonMain } from '../components/Button';
import { StyleSheet } from 'react-native';
import { useState } from 'react';

const PlusIcon = (props) => (
  <Icon {...props} name='plus-circle-outline' fill="#434343" />
);


export const CalendarScreen = () => {

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(current => !current);
}

  return (
    <SafeAreaView style={{backgroundColor: '#FFFEF4'}}>
    <ScrollView scrollEventThrottle={200}>
      <Layout style={styles.layout}>
         <TopNav />   
        {/* <Layout style={{paddingTop:40}}>
        
          <Icon onPress={handleClickOpen} name="plus-circle-outline" fill="#434343" style={{width:23, height:23, paddingLeft:725, marginBottom:15}} />
        </Layout> */}
        <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          
            <CalendarSimpleUsageShowcase />
        
           {
           open?<CalendarCard />:null
           }  
        </Layout>
      <Reminders />
    </Layout>
  </ScrollView>
  </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  layout:{
    flex: 1,
    flexDirection: 'column',
    alignItems:'center',
    paddingTop:30,
    backgroundColor: '#FFFEF4'
  },
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFEF4'
}
  
})
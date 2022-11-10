import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Button, Divider, Layout, TopNavigation, Icon} from '@ui-kitten/components';
import { CategoryButton } from '../components/CategoryButton';
import { FilterButtons } from '../components/FilterButtons';
import { ActivityPopup } from '../components/ActivityPopup';
import { TopNavigationSimpleUsageShowcase } from '../components/TopNav';
import { ScrollView } from 'react-native-gesture-handler';

export const ActivityScreen = () => {


  return ( 
  
    
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <TopNavigationSimpleUsageShowcase />
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
         
         <FilterButtons></FilterButtons>
        <ActivityPopup></ActivityPopup>
      </Layout>

    </SafeAreaView>
   
  );
}

const styles = StyleSheet.create({

})

const StarIcon = (props) => (
  <Icon {...props} name='star'/>
);

const HeartIcon = (props) => (
  <Icon {...props} name='heart'/>
);
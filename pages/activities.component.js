import React from 'react';
import * as eva from '@eva-design/eva';
import { default as theme } from '../styles/theme.json';
import { SafeAreaView, StyleSheet, View, Image, KeyboardAvoidingView} from 'react-native';
import { Button, Divider, Layout, TopNavigation, Icon, ApplicationProvider} from '@ui-kitten/components';
import { CategoryButton } from '../components/CategoryButton';
import { FilterButtons } from '../components/FilterButtons';
import { ActivityPopup } from '../components/ActivityPopup';
import { TopNav, TopNavigationSimpleUsageShowcase } from '../components/TopNav';
import { ScrollView } from 'react-native-gesture-handler';
import Svg from 'react-native-svg';

export const ActivityScreen = ({navigation}) => {

  return (
      <SafeAreaView style={styles.layout}>
        <TopNav />
        <Layout style={styles.layout}>
        <CategoryButton func={() => navigation.push('Activity Card')} stat='info' ar={StarIcon}></CategoryButton>
        <CategoryButton func={() => navigation.push('Activity Card')} stat='success' text='Outdoor' ar={HeartIcon}></CategoryButton>
        <CategoryButton func={() => navigation.push('Activity Card')} stat='warning' text='Creative' ar={StarIcon}></CategoryButton>
        <CategoryButton func={() => navigation.push('Activity Card')} stat='danger' text='Self Care' ar={StarIcon}></CategoryButton>
        </Layout>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  layout:{
    flex: 1,
    flexDirection: 'column',
    alignItems:'center',
    justifyContent: 'center',
    paddingTop:30,
    backgroundColor: '#FFFEF4'
  },
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FDF1E1'
}
  
})

const StarIcon = (props) => (
  <Icon {...props} name='star'/>
);

const HeartIcon = (props) => (
  <Icon {...props} name='heart'/>
);


import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Button, Divider, Layout, TopNavigation, Icon} from '@ui-kitten/components';
import { CategoryButton } from '../components/categorybutton';

export const ActivityScreen = ({navigation}) => {


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <CategoryButton func={() => navigation.push('Activity Card')} status='warning' ar={StarIcon}></CategoryButton>
      <CategoryButton func={() => navigation.push('Activity Card')} status='info' text='Outdoor' ar={HeartIcon}></CategoryButton>
      <CategoryButton func={() => navigation.push('Activity Card')} status='success' text='Creative' ar={StarIcon}></CategoryButton>
      <CategoryButton func={() => navigation.push('Activity Card')} status='danger' text='Self Care' ar={HeartIcon}></CategoryButton>
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
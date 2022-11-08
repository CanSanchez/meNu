import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { Button, Divider, Layout, TopNavigation, Icon} from '@ui-kitten/components';
import { CategoryButton } from '../components/CategoryButton';

export const ActivityScreen = ({navigation}) => {


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Divider/>
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View style={{height:350}}>
      <CategoryButton func={() => navigation.push('Activity Card')} status='warning' ar={StarIcon}></CategoryButton>
      <CategoryButton func={() => navigation.push('Activity Card')} status='info' text='Outdoor' ar={HeartIcon}></CategoryButton>
      <CategoryButton func={() => navigation.push('Activity Card')} status='success' text='Creative' ar={StarIcon}></CategoryButton>
      <CategoryButton func={() => navigation.push('Activity Card')} status='danger' text='Self Care' ar={HeartIcon}></CategoryButton>
      </View>
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
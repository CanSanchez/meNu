import React from 'react';
import * as eva from '@eva-design/eva';
import { default as theme } from '../styles/theme.json';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { Button, Divider, Layout, TopNavigation, Icon, ApplicationProvider} from '@ui-kitten/components';
import { CategoryButton } from '../components/CategoryButton';
import { FilterButtons } from '../components/FilterButtons';
import { ActivityPopup } from '../components/ActivityPopup';
import { TopNavigationSimpleUsageShowcase } from '../components/TopNav';
import { ScrollView } from 'react-native-gesture-handler';

export const ActivityScreen = ({navigation}) => {

  return (
    <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
    <SafeAreaView style={{ flex: 1 }}>
      <Divider/>
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{height:350}}>
      <CategoryButton func={() => navigation.push('Activity Card')} stat='info' ar={StarIcon}></CategoryButton>
      <CategoryButton func={() => navigation.push('Activity Card')} stat='success' text='Outdoor' ar={HeartIcon}></CategoryButton>
      <CategoryButton func={() => navigation.push('Activity Card')} stat='warning' text='Creative' ar={StarIcon}></CategoryButton>
      <CategoryButton func={() => navigation.push('Activity Card')} stat='danger' text='Self Care' ar={HeartIcon}></CategoryButton>
      </View>
      </Layout>
    </SafeAreaView>
    </ApplicationProvider>
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
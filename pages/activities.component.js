import React from 'react';
import * as eva from '@eva-design/eva';
import { default as theme } from '../styles/theme.json';
import { SafeAreaView, StyleSheet, View, Image} from 'react-native';
import { Button, Divider, Layout, TopNavigation, Icon, ApplicationProvider} from '@ui-kitten/components';
import { CategoryButton } from '../components/CategoryButton';
import { FilterButtons } from '../components/FilterButtons';
import { ActivityPopup } from '../components/ActivityPopup';
import { TopNavigationSimpleUsageShowcase } from '../components/TopNav';
import { ScrollView } from 'react-native-gesture-handler';
import Svg from 'react-native-svg';

export const ActivityScreen = ({navigation}) => {

  return (
    <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
    <Layout style={{flex:1, backgroundColor:'#FFFEF4'}}>
      <SafeAreaView style={{ flex: 1 }}>
        <TopNavigationSimpleUsageShowcase/>
        
        <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'#FFFEF4' }}>
        <View style={{height:350}}>
          
        <CategoryButton func={() => navigation.push('Activity Card')} stat='info' ar={Indoor}></CategoryButton>
        <CategoryButton func={() => navigation.push('Activity Card')} stat='success' text='Outdoor' ar={Outdoor}></CategoryButton>
        <CategoryButton func={() => navigation.push('Activity Card')} stat='warning' text='Creative' ar={Creative}></CategoryButton>
        <CategoryButton func={() => navigation.push('Activity Card')} stat='danger' text='Self Care' ar={SelfCare}></CategoryButton>
        </View>
        </Layout>
      </SafeAreaView>
    </Layout>
    </ApplicationProvider>
  );
}

const styles = StyleSheet.create({

})


const SelfCare = (props) => (
  <Image {...props}  source={require('../assets/selfcare.png')} 
  style={{width:50, height:50, marginLeft:55}}/>
)

const Indoor = (props) => (
  <Image {...props}  source={require('../assets/indoor.png')} 
  style={{width:50, height:50, marginLeft:65}}/>
)

const Outdoor = (props) => (
  <Image {...props}  source={require('../assets/outdoor.png')} 
  style={{width:50, height:50, marginLeft:55}}/>
)

const Creative = (props) => (
  <Image {...props}  source={require('../assets/creative.png')} 
  style={{width:50, height:50, marginLeft:55}}/>
)



import React, { useState } from 'react';
import * as eva from '@eva-design/eva';
import { default as theme } from '../styles/theme.json';
import { SafeAreaView, StyleSheet, View, Image, KeyboardAvoidingView} from 'react-native';
import { Button, Divider, Layout, TopNavigation, Icon, TopNavigationAction} from '@ui-kitten/components';
import { CategoryButton } from '../components/CategoryButton';
import { FilterButtons } from '../components/FilterButtons';
import { ActivityPopup } from '../components/ActivityPopup';
import { TopNav, TopNavigationSimpleUsageShowcase } from '../components/TopNav';
import { ScrollView } from 'react-native-gesture-handler';
import Svg from 'react-native-svg';
import { useNavigation, DrawerActions } from "@react-navigation/native";

export const ActivityScreen = () => {

  const handleSubmit = async (cat) => {
    console.log(cat)
    navigation.push('Activity Card', {cat})
  }

  //Notification & favourites drawer navigation
  const navigation = useNavigation();

  //right rendering of top navigation
  const renderDrawerAction = () => (
    <>
      <TopNavigationAction 
        icon={NotIcon} 
        onPress={() => 
        navigation.dispatch(DrawerActions.openDrawer())}
      />
      <TopNavigationAction 
        icon={SaveIcon} 
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      />
    </>
  )
  
  //left rendering of top navigation
  const renderLefttActions = ({navigation}) => (
      <>
      <TopNavigationAction 
      icon={LogoPrimary}
      />
      </>
  )

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

      <SafeAreaView style={styles.layout}>
        <TopNavigation 
        alignment="center"
        accessoryRight={renderDrawerAction}
        accessoryLeft={renderLefttActions}
        style={{
          position: 'fixed',
          width: '100%'
        }} 
        />
        <Layout style={styles.container}>
        <CategoryButton func={() => handleSubmit('Indoor')} ar={StarIcon}></CategoryButton>
        <CategoryButton func={() => handleSubmit('Outdoor')} stat='success' text='Outdoor' ar={HeartIcon}></CategoryButton>
        <CategoryButton func={() => handleSubmit('Creative')} stat='warning' text='Creative' ar={StarIcon}></CategoryButton>
        <CategoryButton func={() => handleSubmit('Self-Care')} stat='danger' text='Self Care' ar={StarIcon}></CategoryButton>

        </Layout>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  layout:{
    flex: 1,
    width: '100%',
    minHeight: '100%', 

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
    width: '100%'
    // backgroundColor: '#FDF1E1'
}
  
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


//icon rendering
const NotIcon = (props) => (
  <Icon {...props} name='bell' fill="#E88C68" />
);

const SaveIcon = (props) => (
  <Icon {...props}  name="bookmark" fill="#E88C68" />
);

const LogoPrimary = ({navigation}) => (
  <View style={{paddingLeft: 15}}>
    <Image 
        style={{  width: 26 , height: 35, objectFit: 'cover' }}
        source={require('../assets/logo/Logo.png')}
      />
  </View>
);
import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { Button, Divider, Layout, TopNavigation } from '@ui-kitten/components';
import { TopNavigationSimpleUsageShowcase } from '../components/TopNav';
import { StyleSheet } from 'react-native';
import { HeaderTitle } from '../components/Header';
import { useFonts, FredokaOne_400Regular } from '@expo-google-fonts/fredoka-one';
import { TextCard } from '../components/TextCard';
import { Image } from 'react-native';
import { RecActivities } from '../components/RecActivities';
import { Reminders } from '../components/Reminders';


export const HomeScreen = () => {
  const [fontsLoaded] = useFonts({
    FredokaOne_400Regular,
  });

  return (
    <>
    <ScrollView scrollEventThrottle={200}>
      <Layout style={styles.layout}>
        <HeaderTitle headertext='Welcome back, Michelle!' />
        <Image style={{ width: 69, height: 60, margin: 10 }} source={require('../assets/Bearface.png')} />
        <TextCard />
        <RecActivities />
        <Reminders />
      </Layout>
      </ScrollView>
    </>
)

}

const styles = StyleSheet.create({
  layout:{
    flex: 1,
    flexDirection: 'column',
    alignItems:'center',
    paddingTop:30,
    backgroundColor: '#FFFFFF'
  }
  
})
import React from 'react';
import { SafeAreaView } from 'react-native';
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

    <SafeAreaView style={{ flex: 1}}>
      <Divider/>
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFFEF4' }}>
        <HeaderTitle />
        <TutorialCard style={styles.card}/>
        <InputSimpleUsageShowcase />
        <ButtonMain />   
      </Layout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  layout:{
    flex: 1,
    alignItems:'center',
  }
  
})


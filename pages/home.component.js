import React from 'react';
import { SafeAreaView } from 'react-native';
import { Button, Divider, Layout, TopNavigation } from '@ui-kitten/components';
import { InputSimpleUsageShowcase } from '../components/Form'
import { ButtonMain } from '../components/Button'
import { TutorialCard } from '../components/TutorialCard';
import { TopNavigationSimpleUsageShowcase } from '../components/TopNav';
import { StyleSheet } from 'react-native';
import { HeaderTitle } from '../components/header';


export const HomeScreen = () => {


<<<<<<< HEAD
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
=======
    
    <>
      <Layout style={styles.layout}>
        <HeaderTitle headertext='Welcome back, Jennifer!' />
        <Image style={{ width: 69, height: 60, margin: 10 }} source={require('../assets/Bearface.png')} />
        <TextCard />
        <RecActivities />
        <Reminders />
      </Layout></>

)

}

const styles = StyleSheet.create({
  layout:{
    flex: 1,
    alignItems:'center',
    paddingTop:30


  }
>>>>>>> c8caf2acb3529fce14e4797750c0eff414bed61e
  
})
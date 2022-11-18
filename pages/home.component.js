import React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { Button, Divider, Layout, TopNavigation, Card, ApplicationProvider } from '@ui-kitten/components';
import { TopNavigationSimpleUsageShowcase } from '../components/TopNav';
import { StyleSheet } from 'react-native';
import { HeaderTitle } from '../components/Header';
import * as eva from '@eva-design/eva';
import { TextCard } from '../components/TextCard';
import { Image } from 'react-native';
import { RecActivities } from '../components/RecActivities';
import { Reminders } from '../components/Reminders';
import LottieView from 'lottie-react-native';
import { useRef } from 'react';
import { useEffect } from 'react';
import { default as theme } from '../styles/theme.json';



export const HomeScreen = ({navigation}) => {

 
  
  const animation = useRef(null);
  useEffect(() => {
    // You can control the ref programmatically, rather than using autoPlay
    // animation.current?.play();
  }, []);
  

  return ( <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFEF4" }}>
      <TopNavigationSimpleUsageShowcase />
      <ScrollView scrollEventThrottle={200}>
        
        <Layout style={styles.layout}>
          
          
          <HeaderTitle onPress={() => navigation.navigate('Activities')} headertext='Welcome back, Michelle!'/>
        <View style={styles.animationContainer}/>
          <LottieView
            autoPlay
            ref={animation}
            style={{
              width: 150,
              height: 150
              
            }}
            source={require('../assets/animations/wavingbear.json')}
          />
          <TextCard />
        
        
          <RecActivities />
          <Reminders />
          
        </Layout>
        
      </ScrollView>
      </SafeAreaView>
    </ApplicationProvider>
    
)

}

const styles = StyleSheet.create({
  layout:{
    flex: 1,
    flexDirection: 'column',
    alignItems:'center',
    paddingTop:30,
    backgroundColor: '#FFFEF4'
  }
  
})
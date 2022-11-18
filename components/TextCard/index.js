import  React from 'react';
import { Icon, Layout, Text, View, Card, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';
import { Image } from 'react-native';
import { useFonts } from 'expo-font';

export const TextCard = () => {

    const [loaded] = useFonts({
        Poppins: require('../../assets/fonts/Poppins-Regular.ttf'),
        PoppinsBold: require('../../assets/fonts/Poppins-Bold.ttf'),
        PoppinsMedium: require('../../assets/fonts/Poppins-Medium.ttf')
      });
    
      if (!loaded) {
        return null;
      }

    return <Card style={styles.tcard}>
        <Text style={{fontFamily:"Poppins"}}> “Being a single parent is not a life full of struggles, but  a journey for the strong."
        </Text>
    </Card>


}

const styles = StyleSheet.create({
    tcard: {
        width: 300,
        height: 100,
        borderRadius:30,
        backgroundColor:"#E88C68",
        opacity:0.70,
        margin:20,
        marginTop:-20  
    }
})
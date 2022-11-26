import  React from 'react';
import { Icon, Layout, Text, View, Card, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';
import { Image } from 'react-native';
import { useFonts } from 'expo-font';
import { FlexStyleProps } from '@ui-kitten/components/devsupport';

export const TextCard = () => {

    const [loaded] = useFonts({
        Poppins: require('../../assets/fonts/Poppins-Regular.ttf'),
        PoppinsBold: require('../../assets/fonts/Poppins-Bold.ttf'),
        PoppinsMedium: require('../../assets/fonts/Poppins-Medium.ttf')
      });
    
      if (!loaded) {
        return null;
      }

    //array of parenting quotes
    let quotes = [

        '“The Golden Rule of Parenting is do unto your children as you wish your parents had done unto you!” –Louise Hart',

        '"Being a single parent is not a life full of struggles, but  a journey for the strong."',
        
        '“The best inheritance a parent can give his children is a few minutes of his time each day.” –O. A. Battista',

        '“There is no such thing as a perfect parent. So just be a real one.” –Sue Atkins'

    ]

    //quote randomizer
    let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];


    return (
        <Card style={styles.tcard}>
            <Text style={styles.title}>
                Quote of the day
            </Text>
            <Text style={styles.quote}>
            {randomQuote}
            </Text>
        </Card>
    )

}

const styles = StyleSheet.create({
    tcard: {
        display: 'flex',
        width: 300,
        borderRadius:30,
        backgroundColor:"#E88C68",
        opacity:0.70,
        margin:10,
        marginBottom: 20,
        padding: 10  
    },
    quote: {
        color: 'white',
        fontFamily: 'Poppins',
        textAlign: 'center'
    },
    title: {
        color: 'white',
        fontFamily: 'Poppins',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '20%',
        marginBottom: '5%'
    }
})
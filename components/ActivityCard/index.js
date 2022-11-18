import { StyleSheet, Image, View} from 'react-native';
import React, { useState, useEffect } from 'react';
import { Card, Text } from '@ui-kitten/components';
import { useFonts } from 'expo-font'


export const ActivityCard = ({
    func=console.log('not a button'),
    fronttxt="Pilates",
    source=require('../../assets/yoga.jpeg'),
}) => {

    const [visible, setVisible] = React.useState(false);
    const [loaded] = useFonts({
      Poppins: require('../../assets/fonts/Poppins-Regular.ttf'),
      PoppinsBold: require('../../assets/fonts/Poppins-Bold.ttf'),
      PoppinsMedium: require('../../assets/fonts/Poppins-Medium.ttf')
    });

    if (!loaded) {
      return null;
    }

    return (
        <Card style={styles.acard} onPress={func}>
            <Image style={styles.picture}
            source={source}></Image>
            <Text category='h5' style={styles.text}>{fronttxt}</Text>
        </Card>
    )
}

const styles = StyleSheet.create({
    acard: {
        width: 300,
        height: 400,
        display:"flex",
        padding: 20,
        borderRadius:30,
        backgroundColor:"#F8F386",
        justifyContent: 'center',
        alignItems: 'center'
    
    },

    text: {
        textAlign:'center',
        marginTop:15,
        fontFamily:'PoppinsBold'
    },

    picture: {
        height: 290,
        width: 240,
        borderRadius: 30,
    }
});

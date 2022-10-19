import { StyleSheet, Image, View} from 'react-native';
import React from 'react';
import { Card, Text } from '@ui-kitten/components';

export const ActivityCard = () => {

    return (
        <Card style={styles.acard}>
            <Image style={styles.img}
            source={require('../../assets/pilates.png')}></Image>
            <Text style={styles.text}>Yoga</Text>
        </Card>
    )
}

const styles = StyleSheet.create({
    acard: {
        width:277,
        height:452,
        display:"flex",
        padding: 20,
        borderRadius:50,
        backgroundColor:"FFF3D3",

    },

    text: {
        textAlign:'center',
        paddingBottom:5
    }

})
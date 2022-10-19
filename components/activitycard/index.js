import { StyleSheet, Image, View} from 'react-native';
import React from 'react';
import { Card, Text } from '@ui-kitten/components';
import { FlexStyleProps } from '@ui-kitten/components/devsupport';

export const ActivityCard = () => {

    return (
        <Card style={styles.acard}>
            <Image style={styles.picture}
            source={require('../../assets/pilates.png')}></Image>
            <Text category='h5' style={styles.text}>Yoga</Text>
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
        backgroundColor:"#FFF3D3",

    },

    text: {
        textAlign:'center',
        padding:5,
    },

    picture: {
        display: "flex",
        justifyContent: "center",
    }

})
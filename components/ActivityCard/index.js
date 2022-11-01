import { StyleSheet, Image, View} from 'react-native';
import React from 'react';
import { Card, Text } from '@ui-kitten/components';
import { FlexStyleProps } from '@ui-kitten/components/devsupport';

export const ActivityCard = ({
    func=console.log('not a button')
}) => {

    return (
        <Card style={styles.acard} onPress={func}>
            <Image style={styles.picture}
            source={require('../../assets/pilates.png')}></Image>
            <Text category='h5' style={styles.text}>Pilates</Text>
        </Card>
    )
}

const styles = StyleSheet.create({
    acard: {
        width: 300,
        height: 400,
        display:"flex",
        padding: 20,
        borderRadius:50,
        backgroundColor:"#FFF3D3",
        justifyContent: 'center',
        alignItems: 'center'
    },

    text: {
        textAlign:'center',
        marginTop:15,
    },
})
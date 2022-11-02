import { Icon, Input, styled, Layout} from '@ui-kitten/components';
import { FlexStyleProps, PropsService } from '@ui-kitten/components/devsupport';
import { StyleSheet } from 'react-native';
import React from 'react';
import { Card, Text } from '@ui-kitten/components';
import { Image } from 'react-native';


export const TutorialCard = ({
    bgcolor = 'black',
}) => {

    return (
        <><Card style={styles.card}>
            <Image style={styles.picture}
            source={require('../../assets/Bearface.png')}></Image>
            <Text category='h6' style={styles.text}>Track Your Mood</Text>
            <Text style={styles.text}>We will assist your mental health professional analyse and help you.</Text>
        </Card>
        <Layout style={styles.container}>
            <Card style={styles.progress}></Card>
            <Card style={styles.progress}></Card>
            <Card style={styles.progress}></Card>
        </Layout>
        
        
        </>
    )
}

const styles = StyleSheet.create({
    card: {
        width:240,
        height:260,
        display:"flex",
        padding: 20,
        borderRadius:30,
        backgroundColor:"#F8F386",
        justifyContent:'center',
        alignItems:'center'

    },

    text: {
        textAlign:'center',
        paddingBottom:5
    },
    progress: {
        width: 25,
        height:6,
        backgroundColor:'grey',
        marginLeft:5,
        marginRight:5
    },
    container: {
       flex: 1,
       flexDirection: 'row',
       paddingTop:10
    },
    picture: {
        width:70,
        height:61,
        marginLeft:35,
        marginBottom:10
        
        
    }

})
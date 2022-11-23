import { Icon, Input, styled, Layout, View} from '@ui-kitten/components';
import { FlexStyleProps, PropsService } from '@ui-kitten/components/devsupport';
import { StyleSheet } from 'react-native';
import React from 'react';
import { Card, Text } from '@ui-kitten/components';
import { Image } from 'react-native';
import { ScrollView } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import Swiper from 'react-native-swiper';



export const TutorialCard = ({
    bgcolor = 'black',
    source = require('../../assets/Bearface.png'),
    cardtxt = "We will assist your mental health professional analyse and help you.",
    headertxt = "Track Your Mood"
}) => {


    return ( 
        <>
           
              
            
           
                    
                    
                <Card style={styles.card}>
                    <Layout style={{alignItems:'center'}}>
                        <Image style={styles.picture}
                        source={source}></Image>
                    </Layout>
                    
                    <Text category='h6' style={styles.text}>{headertxt}</Text>
                    <Text style={styles.text}>{cardtxt}</Text>
                </Card>
        
           
          
          




       
        {/* <Layout style={styles.container}>
                <Card style={styles.progress}></Card>
                <Card style={styles.progress}></Card>
                <Card style={styles.progress}></Card>
            </Layout> */}
            
            </>
        
        
       
    )
}

const styles = StyleSheet.create({
    card: {
        width:240,
        height:320,
        display:"flex",
        padding: 20,
        borderRadius:30,
        backgroundColor:"#E5AB94",
        justifyContent:'center',
        alignItems:'center',
        marginTop:50,
        marginLeft:'19%'

    },

    text: {
        textAlign:'left',
        paddingBottom:5,
        marginLeft:-25,
        paddingRight:-25
        
        
    },
    container: {
       flex: 1,
       flexDirection: 'row',
       paddingTop:10
    },
    picture: {
        width:110,
        height:98,
        display:'flex',
        marginBottom:20
        
        
    }

})
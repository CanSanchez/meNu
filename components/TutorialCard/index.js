import { Icon, Input, styled } from '@ui-kitten/components';
import { FlexStyleProps, PropsService } from '@ui-kitten/components/devsupport';
import { StyleSheet } from 'react-native';
import React from 'react';
import { Card, Text } from '@ui-kitten/components';


export const TutorialCard = () => {

    return (
        <Card style={styles.card} >
        <Text category='h6' style={styles.text}>Track Your Mood</Text>
        <Text style={styles.text}>We will assist your mental health professional analyse and help you.</Text>
      </Card>
    )
}

const styles = StyleSheet.create({
    card: {
        width:240,
        height:260,
        display:"flex",
        padding: 20,
        borderRadius:50,
        backgroundColor:"#F8F386",

    },

    text: {
        textAlign:'center',
        paddingBottom:5
    }

})
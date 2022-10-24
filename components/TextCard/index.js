import  React from 'react';
import { Icon, Layout, Text, Card, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';
import { Image } from 'react-native';

export const TextCard = ({
    bgcolor="#DDD9FF"
}) => {

    return <Card style={styles.tcard}>
        <Text> “Being a single parent is not a life full of struggles, but  a journey for the strong."
        </Text>
    </Card>


}

styles = StyleSheet.create({
    tcard: {
        width: 300,
        height: 100,
        borderRadius:20,
        backgroundColor:"#DDD9FF",
        
    }
})
import  React from 'react';
import { Icon, Layout, Text, Card, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';
import { Image } from 'react-native';

export const TextCard = () => {

    return <Card style={styles.card}>
        <Text> “Being a single parent is not a life full of struggles, but  a journey for the strong."
        </Text>
    </Card>


}

styles = StyleSheet.create({
    card: {
        width: 300,
        height: 100,
        backgroundColor:"#DDD9FF",
        borderRadius:20,
        margin:10
    }
})
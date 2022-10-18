import  React from 'react';
import { Icon, Layout, Text, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';




export const HeaderTitle = () => (
    
    <Text style={styles.text} category='h3'>Welcome To MEnU!</Text>


);

const styles = StyleSheet.create({
    text: {
        padding:20,
        paddingTop:100
    }
})


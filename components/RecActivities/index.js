import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Button, Card, Modal, Text, Layout, Icon } from '@ui-kitten/components';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image } from 'react-native';

const SaveIcon = (props) => (
    <Icon {...props} name='bookmark-outline' fill="#434343"/>
  );

export const RecActivities = () => {

    return (
        <><Text style={{padding:10,marginRight:170, fontWeight: 'bold'}}>Recommended Activities</Text><Layout style={styles.cont}>
            <Layout style={{flex: 1}}>
                <ScrollView horizontal={true}>
            <Layout>
                <Image
                style={{ width: 106, height: 100, borderRadius: 30 }} source={require('../../assets/yoga.jpeg')}></Image>
                    <Text style={styles.text}>Yoga</Text>
            </Layout>
            <Layout >
                <Image style={{ borderRadius: 30, width: 106, height: 100, marginLeft:10, marginRight:10 }} source={require('../../assets/Book.jpeg')}></Image>
                <Text accessoryRight={SaveIcon} style={styles.text}>Reading</Text>
            </Layout>
            <Layout>
                <Image style={{ borderRadius: 30, width: 106, height: 100, marginRight:10}} source={require('../../assets/jump.jpeg')}></Image>
                <Text style={styles.text}>Dancing</Text>
            </Layout>
            <Layout>
                <Image style={{ borderRadius: 30, width: 106, height: 100, marginRight:10 }} source={require('../../assets/sun.jpeg')}></Image>
                <Text style={styles.text}>Walking</Text>
            </Layout>
            </ScrollView>
            </Layout>
            
        </Layout></>

    )
};

const styles=StyleSheet.create({
    cont: {
        flex:1,
        flexDirection:"row",
        
    },
    text: {
        textAlign:"center",
        paddingTop:10
    
    },
    icon: {
            }

})
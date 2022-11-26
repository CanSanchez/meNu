import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Button, Card, Modal, Text, Layout, Icon } from '@ui-kitten/components';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { push } from 'firebase/database';




const SaveIcon = (props) => (
    <Icon {...props} name='bookmark-outline' fill="#434343"/>
  );

export const RecActivities = ({ 
    navigation, 
    func,
    src = require('../../assets/yoga.jpeg'),
    title = 'Yoga'
}) => {
 
    return (
       
        <TouchableOpacity
            onPress={func}
            style={{backgroundColor: 'transparent', margin: 5}}>
            <Image 
                style={{ width: 106, height: 100, borderRadius: 30 }} source={src}></Image>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
                    // <TouchableOpacity style={{backgroundColor: 'transparent'}}> 
                    //     <Image style={{ borderRadius: 30, width: 106, height: 100, marginLeft:10, marginRight:10 }} source={require('../../assets/Book.jpeg')}></Image>
                    //     <Text accessoryRight={SaveIcon} style={styles.text}>Reading</Text>
                    // </TouchableOpacity>
                    // <TouchableOpacity style={{backgroundColor: 'transparent'}}>
                    //     <Image style={{ borderRadius: 30, width: 106, height: 100, marginRight:10}} source={require('../../assets/jump.jpeg')}></Image>
                    //     <Text style={styles.text}>Dancing</Text>
                    // </TouchableOpacity>
                    // <TouchableOpacity style={{backgroundColor: 'transparent'}}>
                    //     <Image style={{ borderRadius: 30, width: 106, height: 100, marginRight:10 }} source={require('../../assets/sun.jpeg')}></Image>
                    //     <Text style={styles.text}>Walking</Text>
                    // </TouchableOpacity>
    )
};

const styles=StyleSheet.create({
    cont: {
        flex:1,
        flexDirection:"row",
        marginTop:20,
        marginBottom:20,
        backgroundColor: 'transparent'
    },
    text: {
        textAlign:"center",
        paddingTop:10,
        // color: 'black'
    },
    icon: {
            }

})


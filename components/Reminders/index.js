import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Card, Modal, Text, Layout, Icon } from '@ui-kitten/components';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image } from 'react-native';
import { Radio } from '@ui-kitten/components';

export const Reminders = () => {

    const [checked, setChecked] = React.useState(false);

    return ( 
        <Layout style={{backgroundColor:'transparent', position:'absolute', marginTop:450}}>
            <Text style={{paddingTop:10}}>Reminders</Text>
            <Card style={styles.recard}>
                <Radio checked={checked}
                onChange={nextChecked => setChecked(nextChecked)}>
                Mediation and mindfulness (Yoga)</Radio>
                <Text style={{paddingLeft:32}}>8:00am</Text>
            </Card>
            <Card style={styles.recard}>
                <Radio checked={checked}
                onChange={nextChecked => setChecked(nextChecked)}>Breakfast with kids</Radio>
                <Text style={{paddingLeft:32}}>Check emails for 15 mins</Text>
            </Card>
          

        </Layout>

    )
}

styles=StyleSheet.create({
    recard: {
        width:310,
        height: 60,
        backgroundColor:'#FFEFE7',
        borderRadius:45,
        margin:10

    }
})
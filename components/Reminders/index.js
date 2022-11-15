import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Button, Card, Modal, Text, Layout, Icon } from '@ui-kitten/components';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image } from 'react-native';
import { Radio } from '@ui-kitten/components';

export const Reminders = () => {

    const [checked, setChecked] = React.useState(false);

    return ( 
        <Layout style={{backgroundColor:'transparent', marginBottom: 200, marginTop: 20,flex: 1,
        flexDirection: 'column',
        alignItems:'center',}}>
            <ScrollView>
            <Text style={{fontWeight: 'bold'}}>Reminders</Text>
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
            </ScrollView>
        </Layout>

    )
}

styles=StyleSheet.create({
    recard: {
        width:310,
        height: 60,
        backgroundColor:'#E7E6DE',
        borderRadius:30,
        margin:10

    }
})
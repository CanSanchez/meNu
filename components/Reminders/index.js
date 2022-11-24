import React, {useState} from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Button, Card, Modal, Text, Layout, Icon } from '@ui-kitten/components';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image } from 'react-native';
import { Radio } from '@ui-kitten/components';

import { collection, getFirestore, where } from "@firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";

export const Reminders = ({
    time="8:00am",
    title="Crafting with Chloe",
    path,
    date
}) => {

    const db = getFirestore();
    const query = collection(db, path);
    const [docs] = useCollectionData(query);

    const [checked, setChecked] = useState(false);


    return ( 
        <Layout style={styles.layout}>
            <ScrollView>
            {docs?.map((doc) => (
            <Card style={styles.recard} key={Math.random()}>
                <Layout style={styles.container}>
                    <Radio 
                        key={Math.random()}
                        checked={checked}
                        style={{margin: 0}}
                        onChange={nextChecked => setChecked(nextChecked)}>
                    </Radio>
                    <Text style={styles.time}>{doc.time}</Text>
                    <Text style={styles.title}>{doc.title}</Text> 
                </Layout>
            </Card>
            ))}
            </ScrollView>
        </Layout>
    )
}

const styles=StyleSheet.create({
    recard: {
        width:310,
        // backgroundColor:'#F8C8A5',
        borderRadius:30,
        marginTop:20
    },
    layout:{
        flex: 1,
        flexDirection: 'column',
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        margin: 15
    },
    container:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'transparent',
        // borderColor: 'black',
        // borderWidth: 1
    },
    time:{
        paddingLeft:5, 
        fontWeight: 'bold'
    },
    title:{
        paddingLeft:7, 
    }
})
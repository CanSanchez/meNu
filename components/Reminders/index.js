import React, {useState} from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Button, Card, Modal, Text, Layout, Icon } from '@ui-kitten/components';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image } from 'react-native';
import { Radio } from '@ui-kitten/components';

import { collection, getFirestore, where, query } from "@firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";

export const Reminders = ({
    time="8:00am",
    title="Crafting with Chloe",
    path,
    date
}) => {

    const db = getFirestore();
    const q = query(collection(db, path),  where("date", '==', date));
    const [docs] = useCollectionData(q);

    const [checked, setChecked] = useState(false);


    return ( 
        <Layout style={styles.layout}>
            <ScrollView>
            {docs?.map((doc) => (
            <Card style={styles.recard} key={Math.random()}>
                <Layout style={styles.container}>
                    {/* <Radio 
                        key={Math.random()}
                        checked={checked}
                        style={{margin: 0}}
                        onChange={nextChecked => setChecked(nextChecked)}>
                    </Radio> */}
                    <Text style={styles.time}>{doc.time}</Text>
                    <Text style={styles.title}>{doc.title}</Text>
                    <Icon name="close-outline" fill="#F1B08D" style={{width:16, height:16, justifySelf: 'flex-end' }}
                        />
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
        backgroundColor:'#E7E6DE',
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
        alignItems: 'center',
        backgroundColor: 'transparent',
        // borderColor: 'black',
        // borderWidth: 1
        justifyContent: 'space-between',
        alignContent: 'center'
    },
    time:{
        paddingLeft:5, 
        fontWeight: 'bold'
    },
    title:{
        paddingLeft:7, 
    },
    icon: {
        width:20
    }
})

const DeleteIcon = (props) => (
    <Icon {...props} name='trash-2-outline'/>
  );

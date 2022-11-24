import React from "react";
import { Button, Layout } from "@ui-kitten/components";
import { StyleSheet, View, ScrollView} from "react-native";

export const FilterButtons = ({

    func="", 
    ar = "",
  }) => (
        <Layout style={styles.cont}>
            <Layout style={styles.button}>
                <ScrollView horizontal={true}>
                    <Layout style={styles.filter1}>
                        <Button
                        size="tiny"
                        status="basic"
                        onPress={func}
                        >15mins</Button>
                    </Layout>
                    <Layout style={styles.filter1}>
                        <Button
                        size="tiny"
                        status="basic"
                        onPress={func}
                        >30mins</Button>
                    </Layout>
                    <Layout style={styles.filter1}>
                        <Button
                        size="tiny"
                        status="basic"
                        onPress={func}
                        >45mins</Button>
                    </Layout>
                    <Layout style={styles.filter1}>
                        <Button
                        size="tiny"
                        status="basic"
                        onPress={func}
                        >60mins</Button>
                    </Layout>
                </ScrollView>
            </Layout>
        </Layout>
  );

  const styles=StyleSheet.create({
    cont: {
        flex:1,
        flexDirection:"row",
        paddingTop:20,
        backgroundColor:'#FFFEF4'
        
    },
    button: {
        textAlign:"center",
        paddingTop: 60,
        backgroundColor:'#FFFEF4'

        marginBottom: 20
    },
    button: {
        textAlign:"center",
        paddingTop: 60

    },
    filter1:{
        padding:10,
        backgroundColor:'#FFFEF4'
    }


})


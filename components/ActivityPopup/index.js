import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { Card, Text, Modal, Icon } from "@ui-kitten/components";
import { ButtonMain } from "../Button";
import { ActivityCard } from "../ActivityCard";

export const ActivityPopup = ({ navigation }) => {
  
    const [visible, setVisible] = React.useState(false);
  
    return (
      <View>
        <ActivityCard func={() => setVisible(true)}/>
  
        <Modal
          visible={visible}
          backdropStyle={styles.backdrop}
          onBackdropPress={() => setVisible(false)}>
          <Card disabled={true}
          style={styles.card}>
              <View>
              <Image style={styles.picture} source={require('../../assets/pilates.png')}></Image>
              <Text style={styles.header} category='h4'>Pilates</Text>
              <Text category='s1'>Improves strength and balance</Text>
              <Text style={{paddingTop:10}} category='s1'>Helps with back pain relief</Text>
              <Text style={{paddingTop:10}} category='s1'>Relaxes you</Text>
              <Text style={{paddingTop:10}} category='s1'>Gives you more energy</Text>
              <Text style={styles.subheader} category='h6'>NEED TO BE PREPARED:</Text>
              <Text style={{paddingTop:10}} category='s1'>Pilates mat</Text>
              </View>
              <View style={styles.buttondiv}>
                  <ButtonMain style={styles.button} text="Add to Reminder" func={() => navigation.push('Calendar')}>
                  </ButtonMain>
              </View>
          </Card>
        </Modal>
      </View>
    );
  };

  const styles = StyleSheet.create({
    backdrop: {
      backgroundColor: '#FFFFF6',
    },

    card: {
        width:350,
        height: 500,
        display: "flex",
        alignItems: "center",
    },

    buttondiv:{
        paddingTop:20
    },

    header:{
        display:"flex",
        justifyContent:"center",
        padding:10,
        paddingBottom: 20,
        paddingLeft: 83,
    },

    picture: {
        width: 250,
        height: 150,
        borderRadius: 30,

    },

    subheader: {
      paddingTop: 20,
    }

  });

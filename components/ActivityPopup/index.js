import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { Card, Text, Modal, Icon } from "@ui-kitten/components";
import { ButtonMain } from "../Button";
import { ActivityCard } from "../ActivityCard";

export const ActivityPopup = () => {
  
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
              </View>
              <View style={styles.buttondiv}>
                  <ButtonMain style={styles.button} text="Add to Calendar" onPress={() => setVisible(false)}>
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
    },

    buttondiv:{
        paddingTop: 50
    },

    header:{
        display:"flex",
        justifyContent:"center",
        paddingTop: 10,
        paddingBottom: 10
    },

    picture: {
        width: 200,
        height: 200,
        borderRadius: 30,

    }

  });
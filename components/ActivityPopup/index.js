import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { Card, Text, Modal, Icon } from "@ui-kitten/components";
import { ButtonMain } from "../Button";
import { ActivityCard } from "../ActivityCard";

export const ActivityPopup = ({ 
  fronttext='Pilates',
  h4="Pilates",
  list1="Improves strength and balance",
  list2="Helps with back pain relief  ",
  list3="Relaxes you",
  list4="Gives you more energy",
  needs="Pilates mat",
  navigation }) => {
  
    const [visible, setVisible] = React.useState(false);
  
    return (
      <View>
        <ActivityCard func={() => setVisible(true)}
        fronttext={fronttext}/>
  
        <Modal
          visible={visible}
          backdropStyle={styles.backdrop}
          onBackdropPress={() => setVisible(false)}>
          <Card disabled={true}
          style={styles.card}>
              <View>
              <Image style={styles.picture} source={require('../../assets/pilates.png')}></Image>
              <Text style={styles.header} category='h4'>{h4}</Text>
              <Text category='s1'>{list1}</Text>
              <Text style={{paddingTop:10}} category='s1'>{list2}</Text>
              <Text style={{paddingTop:10}} category='s1'>{list3}</Text>
              <Text style={{paddingTop:10}} category='s1'>{list4}</Text>
              <Text style={styles.subheader} category='h6'>NEED TO BE PREPARED:</Text>
              <Text style={{paddingTop:10}} category='s1'>{needs}</Text>
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
        height: 40,
        alignItems: 'center',
        paddingTop:10,
        paddingBottom:40

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

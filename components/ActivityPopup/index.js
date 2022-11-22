import React, {useState} from "react";
import { StyleSheet, View, Image } from "react-native";
import { Card, Text, Modal, Icon, Layout } from "@ui-kitten/components";
import { ButtonMain } from "../Button";
import { ActivityCard } from "../ActivityCard";
import { useFonts } from 'expo-font'

export const ActivityPopup = ({ navigation,
  source=require('../../assets/images/painting.jpeg'),
  fronttxt="Yoga",
  list1="Improves strength and balance",
  list2="Helps with back pain relief",
  list3="Relaxes you",
  list4="Gives you more energy",
  need="Pilates mat"

}) => {
  
    const [visible, setVisible] = React.useState(false);
    const [loaded] = useFonts({
      Poppins: require('../../assets/fonts/Poppins-Regular.ttf'),
      PoppinsBold: require('../../assets/fonts/Poppins-Bold.ttf'),
      PoppinsMedium: require('../../assets/fonts/Poppins-Medium.ttf')
    });

    if (!loaded) {
      return null;
    }
  
    return (
      <Layout style={styles.container}>
        <ActivityCard func={() => setVisible(true)}
        fronttxt={fronttxt}
        source={source}/>

        <Modal
          visible={visible}
          backdropStyle={styles.backdrop}
          onBackdropPress={() => setVisible(false)}>
          <Card disabled={true}
          style={styles.card}>
              <Layout style={styles.layout}>
              <Image style={styles.picture} source={source}></Image>
              <Text style={styles.header} category='h4'>{fronttxt}</Text>
              
              <View style={{ flexDirection: 'row' }}>
              {/* <Icon name='checkmark' fill='green' width={24} height={24} style={styles.icon} /> */}
              <Text category='s1' style={{fontFamily:'Poppins', textAlign: 'center'}}>{list1}</Text>
              </View>

              {/* <View style={{ flexDirection: 'row' }}>
              <Icon name='checkmark' fill='green' width={24} height={24} style={styles.icon} />
              <Text category='s1' style={{fontFamily:'Poppins'}}>{list2}</Text>
              </View>

              <View style={{ flexDirection: 'row' }}>
              <Icon name='checkmark' fill='green' width={24} height={24} style={styles.icon} />
              <Text category='s1' style={{fontFamily:'Poppins'}}>{list3}</Text>
              </View>

              <View style={{ flexDirection: 'row' }}>
              <Icon name='checkmark' fill='green' width={24} height={24} style={styles.icon} />
              <Text category='s1' style={{fontFamily:'Poppins'}}>{list4}</Text>
              </View>

              <Text style={styles.subheader} category='h6'>NEED TO BE PREPARED:</Text>
              <Text style={{paddingTop:10, fontFamily:'Poppins'}} category='s1'>{need}</Text>*/}
              </Layout>
              <View style={styles.buttondiv}>
                  <ButtonMain style={styles.button} text="Add to Reminder" func={() => navigation.push('Calendar')}>
                  </ButtonMain>
              </View>
          </Card>
        </Modal>
      </Layout>
    );
  };

  const styles = StyleSheet.create({
    backdrop: {
      backgroundColor: '#FFFFF6',
    },

    card: {
        width:350,
        height: 500,
        borderRadius: 30,
        display: "flex",
        alignItems: "center",
        justifyContent: 'center'
    },

    buttondiv:{
        paddingTop:20
    },

    header:{
       textAlign:'center',
        padding:10,
        fontFamily: 'PoppinsBold'
    },

    picture: {
        width: 250,
        height: 150,
        borderRadius: 30,
    },

    subheader: {
      paddingTop: 20,
      fontFamily:'PoppinsMedium'
    },
    container:{
      margin: 45
  },
  layout:{
    flexDirection: 'column',
    alignItems:'center',
    justifyContent: 'center',
  }
  });

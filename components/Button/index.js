import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Layout, Icon, Text} from '@ui-kitten/components';
import { useFonts } from 'expo-font';


export const ButtonMain = ({
  text = "Press Me",
  bgcolor = "black",
  ar = "", //optional accessory/icon to right
  al="", //optional accessory/icon to left
  sz="", //optional size
  stat="", //optional color change
  func= console.log('empty') //function props
}) => {

  const [loaded] = useFonts({
    Poppins: require('../../assets/fonts/Poppins-Regular.ttf'),
    PoppinsBold: require('../../assets/fonts/Poppins-Bold.ttf'),
    PoppinsMedium: require('../../assets/fonts/Poppins-Medium.ttf')
  });

  if (!loaded) {
    return null;
  }


  return (
    <Button 
    style={styles.button} 
    bgcolor={bgcolor} 
    accessoryRight={ar} 
    accessoryLeft={al}
    size={sz}
    status={stat}
    onPress={func}>
    <Text style={{fontFamily:"Poppins"}}>{text}</Text>
    </Button>
)};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    // backgroundColor: 'transparent'
  },
  button: {
    margin: 5,
    borderRadius:'30px',
  },
  text: {
    color:"white",

  }
});


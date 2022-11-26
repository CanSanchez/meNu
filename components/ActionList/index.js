import React from 'react';
import { Avatar, Button, ListItem } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';

//List items with action in them

export const ActionListItem = ({
    tle="", //title props
    desc="", //optional description props
    al="", //optional icon/accessory to the left props
    ar="", //optional icon/accessory to the right props
    styl={}, //optional custom styling
    func= console.log('not a button')
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


  
  <ListItem
    title={tle}
    description={desc}
    accessoryLeft={al}
    accessoryRight={ar}
    style={styles.actionstyle}
    onPress={func}
  />

  
)};

const styles = StyleSheet.create({
  actionstyle: {  
    // backgroundColor: '#FFF3D3',
    borderRadius: '25%',
    marginTop: "2%",
    marginBottom: '2%',
    width: "80%"
  }
})
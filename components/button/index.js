import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Layout, Icon} from '@ui-kitten/components';


export const ButtonMain = ({
  text = "Press Me",
  bgcolor = "black",
  ar = "", //optional accessory/icon to right
  al="", //optional accessory/icon to left
  sz="", //optional size
  stat="", //optional color change
  func="" //function props
}) => (
    <Button 
    style={styles.button} 
    bgcolor={bgcolor} 
    accessoryRight={ar} 
    accessoryLeft={al}
    size={sz}
    status={stat}
    onPress={func}>
      {text}
    </Button>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'transparent'
  },
  button: {
    margin: 5,
    borderRadius:'50px'
  },
  text: {
    color:"white"
  }
});


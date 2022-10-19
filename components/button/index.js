import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Layout, Icon} from '@ui-kitten/components';


export const ButtonMain = ({
  text = "Press Me",
  bgcolor = "black",
  ar = "",
  al="",
  sz="",
  stat="",
  func=""
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


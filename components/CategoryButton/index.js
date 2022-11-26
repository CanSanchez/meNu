import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Layout, Icon, ApplicationProvider } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import {default as theme} from '../../styles/theme.json';


export const CategoryButton = ({
  text = "Indoor",
  stat = "",
  func="", 
  ar = "",
}) => (
    <Button 
    style={styles.button} 
    status={stat}
    accessoryRight={ar} 
    onPress={func}>
      {text}
    </Button>
);

const styles = StyleSheet.create({
  button: {
    margin: 5,
    borderRadius:30,
    width: 225,
    height: 65,
  },
  text: {
    color:"#000000",
    display:'flex',
  }
});


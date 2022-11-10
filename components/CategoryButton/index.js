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
  <ApplicationProvider {...eva} theme={{ ...eva.dark, ...theme }}>
    <View style={styles.container}>
    <Button 
    style={styles.button} 
    status={stat}
    accessoryRight={ar} 
    onPress={func}>
      {text}
    </Button>
    </View>
  </ApplicationProvider>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'transparent',
    justifyContent: 'center',
  },
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


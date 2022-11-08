import React from 'react';
import * as eva from '@eva-design/eva';
import { StyleSheet, View } from 'react-native';
import { Button, Layout, Icon, ApplicationProvider } from '@ui-kitten/components';
import { default as theme } from '../../custom-theme.json';



export const CategoryButton = ({
  text = "Indoor",
  status = "",
  func="", 
  ar = "",
}) => (
    <ApplicationProvider {...eva} theme={{ ...eva.dark, ...theme }}>
    <View style={styles.container}>
    <Button 
    style={styles.button} 
    status={status}
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
    color:"wh",
    display:'flex',
  }
});

import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Layout, Icon } from '@ui-kitten/components';


export const CategoryButton = ({
  text = "Indoor",
  status = "",
  func="", 
  ar = "",
}) => (
    <View style={styles.container}>
    <Button 
    style={styles.button} 
    status={status}
    accessoryRight={ar} 
    onPress={func}>
      {text}
    </Button>
    </View>
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

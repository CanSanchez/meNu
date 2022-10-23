import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Layout, Icon } from '@ui-kitten/components';


export const CategoryButton = ({
  text = "Indoor",
  bc = "black",
  func="", 
  ar = "",
}) => (
    <View style={styles.container}>
    <Button 
    style={styles.button} 
    backgroundColor={bc}
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
    borderRadius:10,
    width: 225,
    height: 65,
    backgroundColor:'blue'
  },
  text: {
    color:"wh",
    display:'flex',
  }
});

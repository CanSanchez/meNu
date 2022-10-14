import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Layout} from '@ui-kitten/components';
import { styled } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { Text } from 'react-native-svg';


export default function MyComponent({
  //...write your props here
  category='h1'
  }){
  
  return <View>
  <Text category={category}>Hi this is my UI Kitten Text</Text>
  </View>

};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    
  },
  button: {
    margin: 2,
    backgroundColor: 'black',
    borderColor:'black',
    borderRadius:'50px'
  },
});
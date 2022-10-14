import React from 'react';
import { Icon, Input, styled } from '@ui-kitten/components';
import { FlexStyleProps, PropsService } from '@ui-kitten/components/devsupport';
import { StyleSheet } from 'react-native';
import {FaAlignRight, FaUserAlt} from 'react-icons/fa';
import { View, Text} from 'react-native';





export const InputSimpleUsageShowcase = () => {


  const [value, setValue] = React.useState('');

  const renderCaption = () => {
    return (
      <View style={styles.captionContainer}>
    
        <Text style={styles.captionText}>Forgot Password?</Text>
      </View>
    )
  }
  

  return (

    <>

     
      <Input style={styles.input}

        placeholder='Username or Email'
        size='large'
        value={value}
        StyleProp='poppins'
        
        onChangeText={nextValue => setValue(nextValue)} />

        <Input style={styles.input}
        caption={renderCaption}
        placeholder='Password'
        size='large'
        value={value}
        StyleProp='poppins'
        onChangeText={nextValue => setValue(nextValue)} />
  </>

      
    
  );
};

const styles = StyleSheet.create({
  input: {
    display:'flex',
    justifyContent:'center',
    backgroundColor:'white',
    margin:15,
    borderRadius:15,
    
  },

  captionText: {
    fontSize: 12,
    fontWeight: "400",
    color: "#8F9BB3",

  }
})
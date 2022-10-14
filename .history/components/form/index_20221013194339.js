import React from 'react';
import { Icon, Input, styled } from '@ui-kitten/components';
import { FlexStyleProps, PropsService } from '@ui-kitten/components/devsupport';
import { StyleSheet } from 'react-native';
import {FaAlignRight, FaUserAlt} from 'react-icons/fa';
import { View, AlertIcon } from 'react-native';





export const InputSimpleUsageShowcase = () => {


  const [value, setValue] = React.useState('');

  const renderCaption = () => {
    return (
      <View style={styles.captionContainer}>
        {AlertIcon(styles.captionIcon)}
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
        caption={renderCaption}
        onChangeText={nextValue => setValue(nextValue)} />

        <Input style={styles.input}

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
  
  
})
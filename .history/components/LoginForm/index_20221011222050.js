import React from 'react';
import { Input, styled } from '@ui-kitten/components';
import { FlexStyleProps, PropsService } from '@ui-kitten/components/devsupport';
import { StyleSheet } from 'react-native';

export const InputSimpleUsageShowcase = () => {

  const [value, setValue] = React.useState('');

  return (


      <><Input style={styles.input}

      placeholder='Username or Email'
      value={value}
      StyleProp='poppins'
      onChangeText={nextValue => setValue(nextValue)} />
      
      <Input style={styles.input} 
      placeholder='Password'
      StyleProp='poppins'
      /></>

      
    
  );
};

const styles = StyleSheet.create({
  input: {
    display:'flex',
    justifyContent:'center',
    backgroundColor:'white'
    padding:'10px'
  }
})
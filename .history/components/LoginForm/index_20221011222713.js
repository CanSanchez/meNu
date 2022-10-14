import React from 'react';
import { Input, styled } from '@ui-kitten/components';
import { FlexStyleProps, PropsService } from '@ui-kitten/components/devsupport';
import { StyleSheet } from 'react-native';

export const InputSimpleUsageShowcase = () => {

  const [value, setValue] = React.useState('');

  return (


      <View style={styles.container}><Input style={styles.input}

      placeholder='Username or Email'
      value={value}
      StyleProp='poppins'
      onChangeText={nextValue => setValue(nextValue)} />
      
      <Input style={styles.input} 
      placeholder='Password'
      StyleProp='poppins'
      
      /><View/>

      
    
  );
};

const styles = StyleSheet.create({
  input: {
    display:'flex',
    justifyContent:'center',
    backgroundColor:'white',
    
  },
  container: {
    padding:'10px'
  }
})
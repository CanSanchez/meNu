import React from 'react';
import { Input, styled } from '@ui-kitten/components';
import { FlexStyleProps, PropsService } from '@ui-kitten/components/devsupport';
import { StyleSheet } from 'react-native';
import {FaUserAlt} from 'react-icons/fa';



export const InputSimpleUsageShowcase = () => {

  const [value, setValue] = React.useState('');


  return (

    <>

      
      <Input style={styles.input}

        placeholder='Username or Email'
        value={value}
        StyleProp='poppins'
        onChangeText={nextValue => setValue(nextValue)} />

        <Input style={styles.input}

        placeholder='Password'
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
    textAlign:center
    
  },
  
  
})
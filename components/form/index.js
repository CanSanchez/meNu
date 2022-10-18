import React from 'react';
import { Icon, Input, styled } from '@ui-kitten/components';
import { FlexStyleProps, PropsService } from '@ui-kitten/components/devsupport';
import { StyleSheet } from 'react-native';
import { View } from 'react-native';
import { Text } from '@ui-kitten/components';

const UserIcon = (props) => (
  <Icon {...props} name='person-outline'/>
);

const PassIcon = (props) => (
  <Icon {...props} name='lock-outline'/>
);


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

      <Text category="h6">Login</Text>
      <Input style={styles.input}

        placeholder='Username or Email'
        size='large'
        value={value}
        StyleProp='poppins'
        accessoryLeft={UserIcon}
        
        onChangeText={nextValue => setValue(nextValue)} />

        <Input style={styles.input}
        caption={renderCaption}
        placeholder='Password'
        size='large'
        value={value}
        StyleProp='poppins'
        accessoryLeft={PassIcon}
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
    color: "white",
    textAlign:"right",
    padding:10

  },


})
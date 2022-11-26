import React from 'react';
import { Icon, Input, styled } from '@ui-kitten/components';
import { FlexStyleProps, PropsService } from '@ui-kitten/components/devsupport';
import { StyleSheet } from 'react-native';
import { View } from 'react-native';
import { Text } from '@ui-kitten/components';
import { HeaderTitle } from '../Header';

const UserIcon = (props) => (
  <Icon {...props} name='person-outline'/>
);

const PassIcon = (props) => (
  <Icon {...props} name='lock-outline'/>
);


export const LoginForm = ({
  formtitle="Create Account",
  placeholder="Username",
}) => {


  const [pass, setPass] = React.useState('');
  const [user, setUser] = React.useState('');
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };


  const renderCaption = () => {
    return (
      <View style={styles.captionContainer}>
    
        <Text style={styles.captionText}>Forgot Password?</Text>
      </View>
    )
  }
  

  return (

    

      <><><Input style={styles.input}

      placeholder={placeholder}
      size='large'
      value={user}
      StyleProp='poppins'
      accessoryLeft={UserIcon}

      onChangeText={nextValue => setUser(nextValue)} />
      </>
      
      <Input style={styles.input}
        caption={renderCaption}
        placeholder='Password'
        size='large'
        value={pass}
        StyleProp='poppins'
        accessoryLeft={PassIcon}
        secureTextEntry={secureTextEntry}
        onChangeText={nextValue => setPass(nextValue)} /></>

      
    
  );
};

const styles = StyleSheet.create({
  input: {
    display:'flex',
    justifyContent:'center',
    backgroundColor:'white',
    margin:15,
    borderRadius:30,
    
  },

  captionText: {
    fontSize: 12,
    fontWeight: "400",
    color: "white",
    textAlign:"right",
    padding:10

  },


})
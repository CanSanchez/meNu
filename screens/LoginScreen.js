import { StyleSheet, Text, View, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import { Button } from '@ui-kitten/components';
import { auth } from '../firebase/firebaseConfig';
import {
    onAuthStateChanged, 
    signInWithEmailAndPassword, 
   } from 'firebase/auth';
import { Loader } from '../components/Loader';
import { useAuth } from '../contexts/AuthContext';

export default function LoginScreen ({navigation}) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setLoading] = useState(false)

    const { login } = useAuth()

    const logIn = async () => {
        setLoading(true)
        try {
            await
            login(email, password);
            if (auth) {
                setLoading(false);
            }
          } catch (err) {
            console.error(err);
            alert('Sorry wrong password or email');
            setLoading(false);
          }
    };

  return (
    <KeyboardAvoidingView 
        style={styles.container}
        behavior="padding"
    >
        {isLoading ? 
            ( 
            <View style={styles.container}>
                <Loader />
            </View>
            ):(
        <><Text>Welcome back</Text><View style={styles.inputContainer}>
                      <TextInput
                          placeholder='Email'
                          value={email}
                          onChangeText={text => setEmail(text)}
                          style={styles.input}
                          autoCapitalize='none' />
                      <TextInput
                          placeholder='Password'
                          value={password}
                          onChangeText={text => setPassword(text)}
                          style={styles.input}
                          autoCapitalize='none'
                          secureTextEntry />
                  </View><View style={styles.buttonContainer}>
                          <Button
                              onPress={logIn}
                              style={styles.button}
                          >
                              <Text style={styles.buttonText}>Login</Text>
                          </Button>
                      </View></>
        )}
    </KeyboardAvoidingView>
  )
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FDF1E1'
    },
    inputContainer:{
        width: '80%'
    },
    input:{
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5
    },
    buttonContainer:{
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40
    },
    button:{
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 10
        
    },
    buttonText:{

    },
    buttonOutline:{
        borderWidth: 2,
        backgroundColor: 'transparent'
    },
    buttonOutlineText:{},
})
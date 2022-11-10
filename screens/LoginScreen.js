import { StyleSheet, Text, View, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import { Button } from '@ui-kitten/components';
import { auth } from '../firebase/firebaseConfig';
import { signInWithPopup, 
    GoogleAuthProvider, 
    createUserWithEmailAndPassword, 
    onAuthStateChanged, 
    signInWithEmailAndPassword,
    signOut 
   } from 'firebase/auth';

export default function LoginScreen ({navigation}) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const createUser = async () => {
        const user = await createUserWithEmailAndPassword(auth, email, password)
    }

    const logIn = async () => {
        const user = await signInWithEmailAndPassword(auth, email, password)
    }

  return (
    <KeyboardAvoidingView 
        style={styles.container}
        behavior="padding"
    >
        <View style={styles.inputContainer}>
            <TextInput 
                placeholder='Email'
                value={email}
                onChangeText ={ text => setEmail(text)}   
                style={styles.input}
            />
             <TextInput 
                placeholder='Password'
                value={password}
                onChangeText ={ text => setPassword(text)}   
                style={styles.input}
                secureTextEntry 
            />
        </View>

        <View style={styles.buttonContainer}>
            <Button
                onPress={logIn}
                style={styles.button}
            >
                <Text style={styles.buttonText}>Login</Text>
            </Button>
            <Button
                onPress={createUser}
                style={[styles.button, styles.buttonOutline]}
                appearance='outline'
            >
                <Text style={styles.buttonOutlineText}>Register</Text>
            </Button>
        </View>

    </KeyboardAvoidingView>
  )
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
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

    },
    buttonOutlineText:{},
})
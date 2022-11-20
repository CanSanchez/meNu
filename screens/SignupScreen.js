import { StyleSheet, Text, View, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import { Button } from '@ui-kitten/components';
import { auth, db } from '../firebase/firebaseConfig';
import { signInWithRedirect, 
        GoogleAuthProvider, 
        createUserWithEmailAndPassword, 
        onAuthStateChanged, 
} from 'firebase/auth';

import {
    collection,
    getDocs,
    addDoc,
    doc,
 } from "firebase/firestore";
import { useAuth } from '../contexts/AuthContext';


   export default function SignupScreen ({navigation}) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [newName, setNewName] = useState("");
    const [newLastName, setNewLastName] = useState("");

    const [users, setUsers] = useState([]);
    const usersCollectionRef = collection(db, "users");

    const { signup } = useAuth()

    const createUser = async () => {
        try {
            const user = await 
            signup(email, password);
            addDoc(usersCollectionRef, { name: newName, lastName: newLastName, email: email });
            alert('Sign up successful! Please log in');
            navigation.navigate('Login');
        }  catch (err) {
            console.error(err);
            alert('Invalid email or email is already in use')
          }
    }

    const GoogleSignIn = () => {
        //new makes a new instance everytime this function is called
        const provider = new GoogleAuthProvider();
        const authorization = auth;
        const result = signInWithRedirect(authorization, provider);
        console.log(result);
      }

//DELETING USER ADD LATER IN PROFILE SETTINGS
    // const deleteUser = async (id) => {
    //     const userDoc = doc(db, "users", id);
    //     await deleteDoc(userDoc);
    // };

    useEffect(() => {
        const getUsers = async () => {
          const data = await getDocs(usersCollectionRef);
          setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
    
        getUsers();
      }, []);
    

  return (
    <KeyboardAvoidingView 
        style={styles.container}
        behavior="padding"
    >
        <View style={styles.inputContainer}>
            <TextInput 
                placeholder='First name'
                value={newName}
                onChangeText ={ text => setNewName(text)}   
                style={styles.input}
            />
             <TextInput 
                placeholder='Last name'
                value={newLastName}
                onChangeText ={ text => setNewLastName(text)}   
                style={styles.input}
            />
            <TextInput 
                placeholder='Email'
                value={email}
                onChangeText ={ text => setEmail(text)}   
                style={styles.input}
                autoCapitalize='none'
            />
             <TextInput 
                placeholder='Password'
                value={password}
                onChangeText ={ text => setPassword(text)}   
                style={styles.input}
                secureTextEntry
                autoCapitalize='none' 
            />
        </View>

        <View style={styles.buttonContainer}>
            <Button
                onPress={()=>{
                    createUser();
                }}
                style={styles.button}
            >
                <Text style={styles.buttonText}>Finish Signing Up</Text>
            </Button>
            <Button
                onPress={GoogleSignIn}
                style={[styles.button, styles.buttonOutline]}
                appearance='outline'
            >
                <Text style={styles.buttonOutlineText}>Sign Up with Google</Text>
            </Button>
        </View>

    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFEF4'
    },
    inputContainer:{
        width: '80%'
    },
    input:{
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
        borderWidth: .5,
        borderColor: '#DBD7B2'
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

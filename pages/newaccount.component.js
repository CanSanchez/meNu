import React from 'react';
import { SafeAreaView } from 'react-native';
import { Button, Divider, Layout, TopNavigation, Icon } from '@ui-kitten/components';
import { InputSimpleUsageShowcase } from '../components/Form'
import { ButtonMain } from '../components/Button'
import { TutorialCard } from '../components/TutorialCard/index.js';
import { TopNavigationSimpleUsageShowcase } from '../components/TopNav';
import { StyleSheet } from 'react-native';
import { HeaderTitle } from '../components/Header';
import { ScrollView } from 'react-native-gesture-handler';
import { useState } from 'react';
import { auth } from '../firebase/firebase.config';
import { signInWithPopup, 
         GoogleAuthProvider, 
         createUserWithEmailAndPassword, 
         onAuthStateChanged, 
         signInWithEmailAndPassword,
         signOut 
        } from 'firebase/auth';

const UserIcon = (props) => (
  <Icon {...props} name='person-outline'/>
);

const PassIcon = (props) => (
  <Icon {...props} name='lock-outline'/>
);

export const CreateAccountScreen = ({navigation}) => {

  //gets user information using useState
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const [user, setUser] = useState({});

  //async means it waits for something to act the function
  const GoogleSignIn = async () => {
    //new makes a new instance everytime this function is called
    const provider = new GoogleAuthProvider();
    const authorization = auth;
    const result = await signInWithPopup(authorization, provider);
    console.log(result);
  }

    //captures the user logged in
    React.useEffect(() => {
      onAuthStateChanged(auth, (currentUser) => setUser(currentUser))
    }, [])
  
    //async waits till it communicates with database to get information
    const HandleRegister = async () => {
      try {
        //catches if you already registered
        setRegisterEmail("");
        setRegisterPassword("");
        const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword); // createUserWithEmailAndPassword is built in on firebase
        console.log(user);
      } catch(err) { //catches error
        console.log(err.message)
      }
    }
  
    const login = async () => {
      try {
        const user =await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
        console.log(user)
      } catch(err) {
        console.log(err.message)
      }
    }
  
    const logout = async () => {
      await signOut(auth)
      console.log('user logged out')
    }
  
    const HandleSubmit = event => {
      console.log('submit');
      event.preventDefault();
      event.target.reset();
    }

  return (
    <SafeAreaView style={{ flex: 1}}>
      <ScrollView showsVerticalScrollIndicator='false'>
      <Layout style={{  flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFFEF4' }}>
          <HeaderTitle />
          <TutorialCard style={styles.card}/>
          <HeaderTitle headertext='Create Account'/>
          <InputSimpleUsageShowcase 
            onChangeText={(event) => {
              setLoginEmail(event.target.value)
            }}
          />
          <InputSimpleUsageShowcase placeholder='Password'/>
          <ButtonMain text="Log In" func={() => navigation.push('Homepage')}/>
          <ButtonMain text="Log In with Google" func={GoogleSignIn()}/>
      </Layout>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  
})
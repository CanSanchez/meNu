import { StyleSheet, Text, View, Image, Layout,KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import React, { useEffect, useState,  } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import { Button } from '@ui-kitten/components';
import { auth } from '../firebase/firebaseConfig';
import {
    onAuthStateChanged, 
    signInWithEmailAndPassword, 
   } from 'firebase/auth';
import { Loader } from '../components/Loader';
import { useAuth } from '../contexts/AuthContext';
import { Icon } from '@ui-kitten/components';
import { TutorialCard } from '../components/TutorialCard';
import Swiper from 'react-native-swiper';
import { ImageBackground } from 'react-native';



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

    const LogoIcon = () => (
        <Image source={require('../assets/logo/logoprimary.png')}/>
      );

  return ( <><KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
  >
      {isLoading ?
          (
              <View style={styles.container}>
                  <Loader />
              </View>
          ) : (

            <ImageBackground
            source={require('../assets/images-login/D6ED5F4DF0A578B2.png')}
                resizeMode={'fill'}
                style={{ flex: 1, width: '100%', height:'100%', justifyContent: 'center',
                alignItems: 'center'}}
            >
              <><Image style={{ width: 250, height: 23, marginTop: 30 }} source={require('../assets/logo/welcome.png')} /><Swiper>
                  <TutorialCard source={require('../assets/SELFCARE.png')} headertxt="Self Care" cardtxt="Moms can select from various self care activities." />
                  <TutorialCard source={require('../assets/ACTIVITY.png')} headertxt="Activities" cardtxt="We will provide you with a set of activities you can complete on your own or with your child(ren)." />
                  <TutorialCard source={require('../assets/REMINDER.png')} headertxt="Reminders" cardtxt="You will receive notifications about schedules, activities to help organize your busy day!" />

              </Swiper><View style={styles.inputContainer}>
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
            </ImageBackground>

          )}
  </KeyboardAvoidingView></>
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
        width: '80%',
        height:'25%',
        paddingTop:30

    },
    input:{
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 30,
        marginTop: 5,
        borderWidth: .5,
        borderColor: '#DBD7B2',
        marginBottom:15
    },
    buttonContainer:{
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 110
    },
    button:{
        width: '70%',
        padding: 15,
        borderRadius: 30,
        alignItems: 'center',
        
    },
    buttonText:{

    },
    buttonOutline:{
        borderWidth: 2,
        backgroundColor: 'transparent'
    },
    buttonOutlineText:{},
})
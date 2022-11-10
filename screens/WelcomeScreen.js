import { StyleSheet, Text, View, KeyboardAvoidingView, Image, ImageBackground } from 'react-native';
import React from 'react';
import { Button } from '@ui-kitten/components';

export default function WelcomeScreen({navigation}) {
    return (
       

        <KeyboardAvoidingView 
            style={styles.container}
        >
             <ImageBackground
                source={require('../assets/images-login/D6ED5F4DF0A578B2.png')}
                resizeMode={'cover'}
                style={{ flex: 1, width: '100%', height:'100%', justifyContent: 'center',
                alignItems: 'center', }}>
                <View style={styles.imgContainer}>
                    <Image style={styles.img}
                    source={require('../assets/images-login/bears_splash.png')}></Image>
                </View>
        
                <View style={styles.buttonContainer}>
                    <Button
                        onPress={() => navigation.navigate('Login')}
                        style={styles.button}
                    >
                        <Text style={styles.buttonText}>Login</Text>
                    </Button>
                    <Button
                        onPress={() => navigation.navigate('Signup')}
                        style={[styles.button, styles.buttonOutline]}
                        appearance = 'outline'
                    >
                        <Text style={styles.buttonOutlineText}>Sign Up as New User</Text>
                    </Button>
                </View>
            </ImageBackground>
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
        color:'black'
    },
    buttonOutline:{
        borderWidth: 2,
        backgroundColor: 'transparent'
    },
    buttonOutlineText:{
        color: 'red'
    },

    imgContainer:{
        objectFit: 'contain'
    },

    img:{
        width: 250,
        height: 250
    }
})

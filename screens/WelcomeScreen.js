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
                resizeMode={'fill'}
                style={{ flex: 1, width: '100%', height:'100%', justifyContent: 'center',
                alignItems: 'center', }}>
                <View style={styles.imgContainer}>
                    <Image style={styles.img}
                    source={require('../assets/logo/LogoMain.png')}></Image>
                    <Image style={{width:380, height:35, marginRight:50}} source={require('../assets/logo/title.png')}/>
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
                        <Text style={styles.buttonOutlineText}>Sign Up</Text>
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
        marginTop: 5
    },
    buttonContainer:{
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40
    },
    button:{
        width: '80%',
        padding: 15,
        borderRadius: 30,
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
        objectFit: 'contain',
        display:'flex',
        alignItems:'center',
        
        

    },

    img:{
        width: 166,
        height: 225,
        display:'flex',
        marginBottom:30,
        alignItems:'center'
    }
})

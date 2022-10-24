import  React from 'react';
import { Icon, Layout, Text, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';
import { useFonts, FredokaOne_400Regular } from '@expo-google-fonts/fredoka-one';




export const HeaderTitle = () => {
    const [fontsLoaded] = useFonts({
        FredokaOne_400Regular,
      });
}
   
(
    
    <Text category='h3' style={{ fontFamily: 'FredokaOne_400Regular'}}>Welcome To MEnU!</Text>


);




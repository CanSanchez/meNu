import  React from 'react';
import { Icon, Layout, Text, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';
import { useFonts, FredokaOne_400Regular } from '@expo-google-fonts/fredoka-one';




export const HeaderTitle = () => {
    const [fontsLoaded] = useFonts({
        FredokaOne_400Regular,
      });
<<<<<<< HEAD
=======

    return (
         <Text  category='h3' style={{color: "#434343", paddingTop: 20, paddingBottom:10, fontFamily: 'FredokaOne_400Regular', marginLeft:10, marginRight:10}}>{headertext}</Text>

    )

>>>>>>> c8caf2acb3529fce14e4797750c0eff414bed61e
}
   
(
    
    <Text category='h3' style={{ fontFamily: 'FredokaOne_400Regular'}}>Welcome To MEnU!</Text>


);




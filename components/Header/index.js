import  React from 'react';
import { Icon, Layout, Text, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';
import { useFonts, FredokaOne_400Regular } from '@expo-google-fonts/fredoka-one';




export const HeaderTitle = ({
    headertext="Welcome To MEnU!"
}) => {
    const [fontsLoaded] = useFonts({
        FredokaOne_400Regular,
      });

    return (
         <Text  category='h6' style={{color: "#434343", paddingTop: 20, paddingBottom:10, fontFamily: 'FredokaOne_400Regular', marginLeft:10, marginRight:10}}>{headertext}</Text>

    )

}
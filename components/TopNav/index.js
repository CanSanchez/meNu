// import React from 'react';
// import { Icon, Text, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
// import { StyleSheet, Image, View, Alert } from 'react-native';

// import { useNavigation, DrawerActions } from "@react-navigation/native";


// //Notification & favourites drawer navigation
//   const navigation = useNavigation();

// //right rendering of top navigation
// const renderDrawerAction = () => (
//   <>
//     <TopNavigationAction 
//       icon={NotIcon} 
//       onPress={() => 
//       navigation.dispatch(DrawerActions.openDrawer())}
//     />
//     <TopNavigationAction 
//       icon={SaveIcon} 
//       onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
//     />
//   </>
// )

// //left rendering of top navigation
// const renderLefttActions = ({navigation}) => (
//   <>
//   <TopNavigationAction 
//   icon={LogoPrimary}
//   />
//   </>
// )



// export const TopNav= () => (
//   <TopNavigation 
//   alignment="center"
//   accessoryRight={renderDrawerAction}
//   accessoryLeft={renderLefttActions}
//   style={{
//     position: 'fixed'
//   }} 
//   />
// );


export const TopNavigationSimpleUsageShowcase = () => (
    <TopNavigation
        
        accessoryRight={RenderRightActions}
        accessoryLeft ={LogoPrimary}
        style={{
          backgroundColor: '#FFFEF4',
          position: 'fixed'
          
        }} >
    </TopNavigation>




// //logo

// const LogoPrimary = ({navigation}) => (
//   <View style={{paddingLeft: 15}}>
//     <Image 
//         style={{  width: 26 , height: 35, objectFit: 'cover' }}
//         source={require('../../assets/logo/Logo.png')}
//       />
//   </View>
// );

// //icons

// const NotIcon = (props) => (
//   <Icon {...props} name='bell' />
// );

// const SaveIcon = (props) => (
//     <Icon {...props}  name="bookmark" />
// );

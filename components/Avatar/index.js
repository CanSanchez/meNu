import React from 'react';
import { StyleSheet } from 'react-native';
import { Avatar } from '@ui-kitten/components';

export const AvatarProfile = () => (
    <Avatar style={styles.avatar} size='giant' source={require('../../assets/woman.png')}/>
);


const styles = StyleSheet.create({
  avatar: {
    margin: 8,
  },
});


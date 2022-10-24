import React from 'react';
import { Dimensions, ImageBackground, Image } from 'react-native';
import { Card, Text } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';
import { activities } from './data';

export const FaveItemCard = () => (
    <Card style={styles.FaveItem} header={FaveItemHeader}>
        <Text category='s1'>
            {activities[0].category}
          </Text>
          <Text
            appearance='hint'
            category='c1'>
            {activities[0].duration}
        </Text>
    </Card>
    );
    
    const FaveItemHeader = () => (
        <Image
          style={styles.itemHeader}
          source={activities[0].img}
        />
      );
    
    
    
    const styles = StyleSheet.create({
        FaveItem: {
            flex: 1,
            margin: 8,
            minWidth: 200,
            maxHeight: 200,
            backgroundColor: 'white',
          },
          itemHeader: {
            height: 135,
            resizeMode: 'cover'
          }
    })
import React from 'react';
import { Dimensions, ImageBackground } from 'react-native';
import { Card, Text } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';

export const FaveItemCard = () => (
    <Card style={styles.FaveItem} header={FaveItemHeader}>
        <Text category='s1'>
            Pilates
          </Text>
          <Text
            appearance='hint'
            category='c1'>
            Be in total control of your body as you move.
        </Text>
    </Card>
    );
    
    const FaveItemHeader = () => (
        <ImageBackground
          style={styles.itemHeader}
          source= { require('../../assets/pilates.png') }
        />
      );
    
    
    
    const styles = StyleSheet.create({
        FaveItem: {
            flex: 1,
            margin: 8,
            maxWidth: Dimensions.get('window').width / 2 - 24,
            maxHeight: 230,
            backgroundColor: 'white',
          },
          itemHeader: {
            height: 135,
            
          }
    })
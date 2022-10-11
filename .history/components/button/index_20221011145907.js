import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Layout, Text } from '@ui-kitten/components';

export const ButtonSimpleUsageShowcase = () => {

  

  return (
    <Layout style={styles.container} >

      <Button >
        BUTTON
      </Button>

      <Text style={styles.text}>
      
      </Text>

    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginHorizontal: 8,
  },
});
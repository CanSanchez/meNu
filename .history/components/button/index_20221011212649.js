import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Layout} from '@ui-kitten/components';

export const ButtonMain = () => (
  <Layout style={styles.container} level='1'>

    <Button name="press me" style={styles.button} ></Button>

  </Layout>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    
  },
  button: {
    margin: 2,
    backgroundColor: 'black',
    borderColor:'black',
    borderRadius:'50px'
  },
});
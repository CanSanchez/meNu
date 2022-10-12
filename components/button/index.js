import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Layout} from '@ui-kitten/components';

export const ButtonMain = () => (
  <Layout style={styles.container} level='1'>

    <Button style={styles.button}>
      Press Me
    </Button>

  </Layout>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'transparent'
  },
  button: {
    margin: 4,
    backgroundColor: 'black',
    borderColor:'black',
    borderRadius:'50px'
  },
});
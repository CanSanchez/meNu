import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Layout, Text} from '@ui-kitten/components';


const ButtonTxt = (props) => (
  <Text category='h6' style={styles.text}>Sign In</Text>
)

export const ButtonMain = () => (
  <Layout style={styles.container} level='1'>

    <Button style={styles.button}>
    {ButtonTxt}
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
    borderRadius:'50px',
    backgroundColor:"#91CCA8",
    borderColor:"#91CCA8"
  },
  text: {
    color:"white"
  }
});
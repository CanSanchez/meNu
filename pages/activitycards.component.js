import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Button, ButtonGroup, Divider, Layout, Icon } from '@ui-kitten/components';
import { ActivityPopup } from '../components/ActivityPopup';

export const ActivityCardScreen = ({ navigation }) => {


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Divider/>
      
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ButtonGroup style={styles.group} status='warning'>
        <Button>15mins</Button>
        <Button>30mins</Button>
        <Button>60mins</Button>
      </ButtonGroup>
      <ActivityPopup></ActivityPopup>
    </Layout>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
 group: {
  padding: 10
 }
})
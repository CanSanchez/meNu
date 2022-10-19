import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Card, Modal, Text } from '@ui-kitten/components';
import { ButtonMain } from '../button';

export const PopupCardButton = () => {

  const [visible, setVisible] = React.useState(false);

  return (
    <View>
      <ButtonMain func={() => setVisible(true)} text='Log Out' stat='danger' sz='tiny'/>

      <Modal
        visible={visible}
        backdropStyle={styles.backdrop}
        onBackdropPress={() => setVisible(false)}>
        <Card disabled={true}>
            <View style={{margin: 10}}>
            <Text category='h4'>Come back soon 😻</Text>
            <Text category='s1'>Are you sure you want to log out?</Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: 10}}>
                <Button onPress={() => setVisible(false)}>
                    Yes
                </Button>
                <Button onPress={() => setVisible(false)}>
                    Cancel
                </Button>
            </View>
        </Card>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Card, Modal, Text } from '@ui-kitten/components';
import { ButtonMain } from '../Button';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../../home.component';

export const PopupCardButton = ({navigation}) => {

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


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
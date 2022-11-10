import React from 'react';
import { Card, Text, Icon, Modal } from '@ui-kitten/components';


export const CalendarCard = () => {

  const [visible, setVisible] = React.useState(false);

  return (

  <View>
  
    <Modal
        visible={visible}
        onBackdropPress={() => setVisible(false)}>
          <Card disabled={true}>


          <Text>
            hello
          </Text>
        </Card>
    </Modal>
  </View>
  
  )
  
};
import React from 'react';
import { StyleSheet } from 'react-native';
import { Divider, List, ListItem } from '@ui-kitten/components';

import { Button, Card, Modal, Text } from '@ui-kitten/components';



const data = new Array(8).fill({
  title: 'Item',
  description: 'Description for item',
});

export const NotificationList = () => {

  const renderItem = ({ item, index }) => (
    <ListItem
      title={`${item.title} ${index + 1}`}
      description={`${item.description} ${index + 1}`}
    />
  );

  return (
    <List
      style={styles.container}
      data={data}
      ItemSeparatorComponent={Divider}
      renderItem={renderItem}
    />
  );
};


// export const ModalWithBackdropShowcase = () => {

//   const [visible, setVisible] = React.useState(true);

//   return (
//     <View style={styles.container}>

//       {/* <Button onPress={() => setVisible(true)}>
//         TOGGLE MODAL
//       </Button> */}

//       <Modal
//         visible={visible}
//         backdropStyle={styles.backdrop}
//         onBackdropPress={() => setVisible(false)}>
//         <Card disabled={true}>
//           <Text>Welcome to UI Kitten 😻</Text>
//           <Button onPress={() => setVisible(false)}>
//             DISMISS
//           </Button>
//         </Card>
//       </Modal>

//     </View>
//   );
// };

const styles = StyleSheet.create({
  container: {
    minHeight: 200,
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});
import React from 'react';
import { SafeAreaView, View, StyleSheet, ScrollView } from 'react-native';
import { Text, Divider, Layout, List } from '@ui-kitten/components';
import { AvatarProfile } from '../components/Avatar';
import { ButtonMain } from '../components/Button';
import { PopupCardButton } from '../components/PopupCard';
import { ToggleButton } from '../components/Toggle';
import { ActionListItem } from '../components/ActionList';
// import { StyleSheet, View } from 'react-native';
import { FaveItemCard } from '../components/FaveCard';

export const FaveScreen = ({ navigation }) => {


  return (
    <SafeAreaView style={{ flex: 1}}>
      <Divider />
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFFEF4'}}>
        <View style={{margin: 10, flexDirection: 'column'}}>
        <ScrollView>
        {/* <List
            contentContainerStyle={styles.productList}
            numColumns={2}
            renderItem={FaveItemCard}
            /> */}  
        <FaveItemCard></FaveItemCard>
        <FaveItemCard></FaveItemCard>
        <FaveItemCard></FaveItemCard>
        <FaveItemCard></FaveItemCard>
        </ScrollView>
        </View>
      </Layout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    productList: {
        paddingHorizontal: 8,
        paddingVertical: 16,
      }
})
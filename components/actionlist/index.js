import React from 'react';
import { Avatar, Button, ListItem } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';


export const ActionListItem = ({
    tle="",
    desc="",
    al="",
    ar="",
    styl={}
}) => (
  <ListItem
    title={tle}
    description={desc}
    accessoryLeft={al}
    accessoryRight={ar}
    style={styl}
  />
);


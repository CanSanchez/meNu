import React from 'react';
import { Avatar, Button, ListItem } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';

//List items with action in them

export const ActionListItem = ({
    tle="", //title props
    desc="", //optional description props
    al="", //optional icon/accessory to the left props
    ar="", //optional icon/accessory to the right props
    styl={} //optional custom styling
}) => (
  <ListItem
    title={tle}
    description={desc}
    accessoryLeft={al}
    accessoryRight={ar}
    style={styl}
  />
);


import React from 'react';
import { Avatar, Button, ListItem } from '@ui-kitten/components';


export const ActionListItem = ({
    tle="",
    desc="",
    al="",
    ar=""
}) => (
  <ListItem
    title={tle}
    description={desc}
    accessoryLeft={al}
    accessoryRight={ar}
    style ={{
        backgroundColor: '#FFF3D3',
        borderRadius: '25%',
        marginTop: "2%",
        marginBottom: '2%',
        width: "80%"
    }}
  />
);
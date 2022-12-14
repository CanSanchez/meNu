import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Calendar } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';

export const CalendarSimpleUsageShowcase = (nextDate) => {

    const [date, setDate] = React.useState(new Date());

    return (
      <React.Fragment>
        <Calendar
          style={{borderRadius: 30}}
          date={date}
          onSelect={nextDate => setDate(nextDate)}
        />
        <Text category='h6' style={{paddingTop: '5%'}}>
          Selected date: {date.toDateString('en-US')}
        </Text>
      </React.Fragment>
    );
  };
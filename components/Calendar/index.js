import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Calendar } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';

export const CalendarSimpleUsageShowcase = () => {

    const [date, setDate] = React.useState(new Date());
  
    return (
      <React.Fragment>
        <Text category='h6' style={{paddingBottom: '5%', paddingTop: '5%'}}> Calendar</Text>
        <Text category='h6' style={{paddingBottom: '5%'}}>
          Selected date: {date.toLocaleDateString()}
        </Text>
        <Calendar
          date={date}
          onSelect={nextDate => setDate(nextDate)}
        />
      </React.Fragment>
    );
  };
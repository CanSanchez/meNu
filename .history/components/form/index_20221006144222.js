import React from 'react';
import { Input } from '@ui-kitten/components';

export const InputSimpleUsageShowcase = () => {

  const [value, setValue] = React.useState('');

  return (
    <Input
      label='Full Name'
      placeholder='Full Name'
      value={value}
      onChangeText={nextValue => setValue(nextValue)}
    />
  );
};
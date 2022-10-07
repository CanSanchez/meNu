import React from 'react';
import { Input } from '@ui-kitten/components';

export const InputSimpleUsageShowcase = () => {(
    label='label'
)

  const [value, setValue] = React.useState('');

  return (
    <Input
      label='Full Name'
      placeholder='Type here...'
      value={value}
      onChangeText={nextValue => setValue(nextValue)}
    />
  );
};
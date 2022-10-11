import React from 'react';
import { Input, styled } from '@ui-kitten/components';



export const InputSimpleUsageShowcase = () => {

  const [value, setValue] = React.useState('');

  return (


      <Input
      label='Personal Info'
      placeholder='Full Name'
      value={value}
      onChangeText={nextValue => setValue(nextValue)}
      />
    
  );
};
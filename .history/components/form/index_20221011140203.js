import React from 'react';
import { Input, styled } from '@ui-kitten/components';
import { FlexStyleProps } from '@ui-kitten/components/devsupport';


export const InputSimpleUsageShowcase = () => {

  const [value, setValue] = React.useState('');

  return (


      <Input style={{display:'flex', justifycontent:'center'}}
      label='Personal Info'
      placeholder='Full Name'
      value={value}
      onChangeText={nextValue => setValue(nextValue)}
      />
    
  );
};
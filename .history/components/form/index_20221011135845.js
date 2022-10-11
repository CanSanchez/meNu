import React from 'react';
import { Input, styled } from '@ui-kitten/components';

const FormCont = styled.div`
  display:flex;
  justify-content:center;

`;

export const InputSimpleUsageShowcase = () => {

  const [value, setValue] = React.useState('');

  return (

    <FormCont>

      <Input
      label='Personal Info'
      placeholder='Full Name'
      value={value}
      onChangeText={nextValue => setValue(nextValue)}
      />
    </FormCont>
    
  );
};
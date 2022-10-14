import React from 'react';
import { Input, styled } from '@ui-kitten/components';
import { FlexStyleProps, PropsService } from '@ui-kitten/components/devsupport';


export const InputSimpleUsageShowcase = () => {

  const [value, setValue] = React.useState('');

  return (


      <Input style={{display:'flex', justifyContent:'center', backgroundColor:'white'}}
      label={name}
      placeholder='Full Name'
      value={value}
      StyleProp='poppins'
      onChangeText={nextValue => setValue(nextValue)}
      />
    
  );
};
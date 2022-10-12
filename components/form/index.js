import React from 'react';
import { Input, styled, Text } from '@ui-kitten/components';
import { FlexStyleProps } from '@ui-kitten/components/devsupport';


export const InputSimpleUsageShowcase = () => {

  const [value, setValue] = React.useState('');

  return (


      <Input style={{display:'flex', justifyContent:'center', backgroundColor:'white', width: '70%'}}
      label={() =><Text style={{fontWeight:"bold", color: "white"}}>Personal Info</Text>}
      placeholder='Full Name'
      value={value}
      StyleProp='poppins'
      onChangeText={nextValue => setValue(nextValue)}
      />
    
  );
};
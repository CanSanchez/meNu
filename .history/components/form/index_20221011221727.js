import React from 'react';
import { Input, styled } from '@ui-kitten/components';
import { FlexStyleProps, PropsService } from '@ui-kitten/components/devsupport';


export const InputSimpleUsageShowcase = () => {

  const [value, setValue] = React.useState('');

  return (


      <Input style={styled.input}

      placeholder='Username or Email'
      value={value}
      StyleProp='poppins'
      onChangeText={nextValue => setValue(nextValue)}
      />

      
    
  );
};

const styles = StyleSheet.create({
  input: {

  }
})
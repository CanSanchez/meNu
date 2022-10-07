import React from 'react';
import { Input } from '@ui-kitten/components';

export const InputSimpleUsageShowcase = () => ({
    labeltxt='label'
})
    

  const [value, setValue] = React.useState('');

  return (
    <Input
      label={labeltxt}
      placeholder='Type here...'
      value={value}
      onChangeText={nextValue => setValue(nextValue)}
    />
  );
};
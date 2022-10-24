import React from 'react';
import { Toggle } from '@ui-kitten/components';

//Toggle button with use state

export const ToggleButton = () => {

  const [checked, setChecked] = React.useState(false);

  const onCheckedChange = (isChecked) => {
    setChecked(isChecked);
  };

  return (
    <Toggle checked={checked} onChange={onCheckedChange}>
    </Toggle>
  );
};
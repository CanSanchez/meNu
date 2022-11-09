import React, {useState} from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { AppNavigator } from './components/NavBar';
import { ActivityNavigator } from './components/RecActivities';
import 'react-native-gesture-handler';
import styled from 'styled-components';
import { default as theme } from './styles/theme.json'; // <-- Import app theme
import { mapping, light, dark } from '@eva-design/eva';

const white = {...eva.light, ...theme};
const black = {...eva.dark, ...theme};

const themes = { white, black };

export default App = () => {
    
  const [theme, setTheme] = React.useState('white');

  const toggleTheme = () => {
    const nextTheme = theme === 'white' ? 'black' : 'white';
    setTheme(nextTheme);
    console.log(nextTheme)
  };

  return (
    <>
      <IconRegistry icons={EvaIconsPack}/>
      <ApplicationProvider {...eva} mapping={mapping} theme={themes[theme]}>
        <AppNavigator toggleTheme={toggleTheme} />
      </ApplicationProvider>
    </>
  );
};
import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { AppNavigator } from '/Users/shaelynlorch/meNu/components/NavBar/index.js';
import styled from 'styled-components';
import { useFonts, FredokaOne_400Regular } from '@expo-google-fonts/fredoka-one';
import 'react-native-gesture-handler';
// import TopNavigator from './navigations/TopNavigator';



export default () => (
  <>
    <IconRegistry icons={EvaIconsPack}/>
    <ApplicationProvider {...eva} theme={eva.light}>
      <AppNavigator/>
    
    </ApplicationProvider>

  </>
);
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  Text,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigation from './src/Navigation/MainNavigation';


const App = () => {
  return (
    <NavigationContainer>
        <MainNavigation />
    </NavigationContainer>
  )
};


export default App;

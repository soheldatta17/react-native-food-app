import React from 'react';
// import { YellowBox } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import AppContainer from './src/navigations/AppNavigation';

console.disableYellowBox = true;
export default function App() {
  return (
     <AppContainer />
  );
}

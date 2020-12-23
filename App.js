import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import Main from './src/pages/Main';

export default function App() {
  return (
    <PaperProvider>
      <Main />
    </PaperProvider>
  );
}

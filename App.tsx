import React from 'react';
import { Home } from './src/screens/Home';
import AppLoading from 'expo-app-loading';

import {
  useFonts,
  Poppins_400Regular, 
} from '@expo-google-fonts/poppins';

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
  });

  if (!fontsLoaded) 
    return <AppLoading />;

  return (
    <Home/>
  );
}


import React from 'react';
import { AppLoading } from "expo";
import { StatusBar } from 'expo-status-bar';

import {
  Archivo_400Regular,
  Archivo_700Bold,
  useFonts
} from "@expo-google-fonts/archivo";

import {
  Poppins_400Regular,
  Poppins_600SemiBold
} from "@expo-google-fonts/poppins";

import Landing from './src/pages/Landing';

export default function App() {
  let [fonstLoaded] = useFonts({
    "Poppins": Poppins_400Regular,
    "Poppins_semiBold": Poppins_600SemiBold,
    "Archivo": Archivo_400Regular,
    "Archivo_bold": Archivo_700Bold,
  });

  if(!fonstLoaded) return <AppLoading />

  return (
    <>
      <Landing />
      <StatusBar style="light" />
    </>

  );
}


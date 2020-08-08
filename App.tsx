import React from 'react';
import { AppLoading } from "expo";
import { StatusBar } from 'expo-status-bar';

import {
  Archivo_400Regular,
  Archivo_700Bold
} from "@expo-google-fonts/archivo";

import {
  Poppins_400Regular,
  Poppins_600SemiBold
} from "@expo-google-fonts/poppins";

import Landing from './src/pages/Landing';



export default function App() {
  return (
    <>
      <Landing />
      <StatusBar style="auto" />
    </>

  );
}


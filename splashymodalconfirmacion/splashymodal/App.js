const Stack = createNativeStackNavigator();
import React, { useState, useEffect } from 'react';
//import * as React from "react";
import { NavigationContainer } from '@react-navigation/native';
import ConfirmacinDeCompraAndroi from "./screens/ConfirmacinDeCompraAndroi";
import SplashScreen from './components/SplashScreen';
import HomeScreen from './components/HomeScreen';

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

export default function App() {
  const [isSplashVisible, setIsSplashVisible] = useState(true);

  useEffect(() => {
    const splashTimer = setTimeout(() => {
      setIsSplashVisible(false);
    }, 10000);

    return () => clearTimeout(splashTimer);
  }, []);

  const navigateToHome = () => {
    setIsSplashVisible(false);
  };
  return (
    isSplashVisible ? <SplashScreen navigation={navigateToHome} /> : <HomeScreen />
    
  );
}

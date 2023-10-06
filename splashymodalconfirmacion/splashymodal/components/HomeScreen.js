const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from '@react-navigation/native';
import ConfirmacinDeCompraAndroi from "../screens/ConfirmacinDeCompraAndroi";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

export default function App() {
  return (
    <>
    <NavigationContainer>
      {
        <ConfirmacinDeCompraAndroi/>
      }
    </NavigationContainer>
    </>
  );
}
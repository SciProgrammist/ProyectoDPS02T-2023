import React, { useEffect } from 'react';
import { View, Text, Image, SafeAreaView } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const splashTimer = setTimeout(() => {
      // Navegar a la pantalla de inicio después de 2 segundos
      navigation('Home'); // Usamos la función de navegación en lugar de navigate
    }, 11000);

    return () => clearTimeout(splashTimer);
  }, [navigation]);

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image
       source={require("../assets/fondofinal.png")}
        style={{ width: 400, height: 800 }} // Ajusta el tamaño según sea necesario
      />
      <Text>Splash Screen</Text>
    </SafeAreaView>
  );
};

export default SplashScreen;
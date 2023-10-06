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
        source={{ uri: 'https://png.pngtree.com/thumb_back/fw800/back_our/20190614/ourmid/pngtree-voucher-background-design-material-image_122758.jpg' }} 
        style={{ width: 400, height: 800 }} // Ajusta el tamaño según sea necesario
      />
      <Text>Splash Screen</Text>
    </SafeAreaView>
  );
};

export default SplashScreen;
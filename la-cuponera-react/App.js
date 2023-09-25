import React, { useRef, useEffect, useState } from 'react';
import { StyleSheet, View, Text, Dimensions, ImageBackground, Image, TouchableOpacity, Pressable, ActivityIndicator } from 'react-native';
import { GoogleSignin, statusCodes, GoogleSigninButton } from '@react-native-google-signin/google-signin';
import { SocialIcon } from 'react-native-elements'
import variables from './src/utis/variables';

const HomeScreen = ({ navigation }) => {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: variables.WEBCLIENTID,
      offlineAccess: false
    })
  }, [usuario])

  
  const googleLogin = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();

      setUsuario(userInfo.user);
      console.log("userinfo" , usuario);


    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log(error)
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log(error)
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log(error)
      } else {
      }
    }
  };

  async function signOut() {
    try {
      await GoogleSignin.revokeAccess()
      await GoogleSignin.signOut()
      setIsLoggedIn(false)
    } catch (error) {
      Alert.alert('Something else went wrong... ', error.toString())
    }
  }

  
  if (usuario === null) {
    return (
      <View>
        <Pressable onPress={googleLogin}>
          <View>
            <SocialIcon
              title='Sign In With Google'
              button
              light
              type='google'
            />
          </View>
        </Pressable>
      </View>
    );
  } else {
    return (
      <View>
        <View>
        <Pressable onPress={googleLogin}>
          <View>
            <SocialIcon
              title='Sign In With Google'
              button
              light
              type='google'
            />
          </View>
        </Pressable>
      </View>
        <Text>Bienvenido {usuario.givenName} </Text>
      </View>);
  }

}


export default HomeScreen;
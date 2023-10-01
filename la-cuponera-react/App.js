import React, { useRef, useEffect, useState } from 'react';
import { StyleSheet, View, Text, Dimensions, ImageBackground, Image, TouchableOpacity, Pressable, ActivityIndicator } from 'react-native';
import { GoogleSignin, statusCodes, GoogleSigninButton } from '@react-native-google-signin/google-signin';
import { Button, SocialIcon } from 'react-native-elements'
import variables from './src/utis/variables';
import { styles } from './src/utis/styles';
import FormComponent from './src/components/login/form.component';
import LoginComponent from './src/components/login/logout.component';
import colors from './src/utis/colors';

const HomeScreen = ({ navigation }) => {
  const [usuario, setUsuario] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [error, setError] = useState(null)
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: variables.WEBCLIENTID,
      offlineAccess: false
    })
  }, [usuario, isLoggedIn])


  const googleLogin = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();

      setUsuario(userInfo.user);
      console.log("userinfo", usuario);
      setIsLoggedIn(true);

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
      console.log('Something else went wrong... ', error.toString())
    }
  }



  if (isLoggedIn == !true) {
    return (
      <View style={styles.container}>
        <FormComponent
          setUsername={setUsername}
          setPassword={setPassword} />

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={{ flex: 1, height: 1, backgroundColor: colors.PRIMARY_COLOR }} />
          <View>
            <Text style={{ width: 50, margin: 'auto', textAlign: 'center', color: colors.PRIMARY_COLOR }}>Or</Text>
          </View>
          <View style={{ flex: 1, height: 1, backgroundColor: colors.PRIMARY_COLOR, }} />
        </View>

        <Pressable onPress={googleLogin} style={{ marginTop: 125 }}>
          <View>
            <SocialIcon
              title='Sign In With Facebook'
              button
              dark
              type='facebook'
            />

            <SocialIcon
              style={{ marginTop: 15 }}
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
        <Text>Bienvenido {usuario.givenName} </Text>
        <LoginComponent signOut={signOut} />
      </View>);
  }

}


export default HomeScreen;
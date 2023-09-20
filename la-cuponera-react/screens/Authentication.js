import React, {useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import { LoginButton } from 'react-native-fbsdk-next';
import Authenticated from "./Authenticated";
import auth from '@react-native-firebase/auth';

export default function Authentication(props) {


  const [authenticated, setAutheticated] = useState(false);
  const user = auth().currentUser;

  auth().onAuthStateChanged((user) => {
    if(user) {
      setAutheticated(true);
    }
  })

  if (authenticated) {
    return <Authenticated />;
  }

  console.log(user)

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Facebook Authentication</Text>
      <LoginButton onPress={props.onFacebookButtonPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    marginBottom: 30,
  },
});
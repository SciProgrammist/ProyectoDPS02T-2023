import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import { LoginButton } from 'react-native-fbsdk';

export default function Authentication(props) {
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
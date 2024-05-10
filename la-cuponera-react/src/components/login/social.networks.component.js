import { RefreshControlBase } from "react-native";
import React from 'react';
import { Text, View, TouchableOpacity, Pressable } from 'react-native';
import { styles } from "../../styles/styles";
import { Button, SocialIcon } from 'react-native-elements'

export default function SocialNetworks(props) {
    const { googleLogin } = props;
    return (
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
    );
}

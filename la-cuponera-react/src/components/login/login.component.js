import { RefreshControlBase } from "react-native";
import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { styles } from "../../utis/styles";

export default function LoginComponent(props) {
    const { signOut } = props;
    return (
        <View>
            <TouchableOpacity style={styles.button} onPress={signOut}>
                <Text style={styles.text}>Log Out</Text>
            </TouchableOpacity>
        </View>
    );
}

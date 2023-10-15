import { RefreshControlBase } from "react-native";
import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { styles } from "../../utis/styles";
import LoginComponent from "../login/logout.component";

export default function SettingPage(props) {
    const { signOut } = props;
    return (
        <View>
            <Text>Setting Page</Text>
            <View>
                
               {/* <Text>Bienvenido {(usuario!=undefined && usuario.givenName === null  && usuario.givenName === undefined ) 
               ? usuario.user.email : usuario.givenName} </Text> */} 

                <LoginComponent signOut={signOut} />
            </View>
        </View>
    );
}

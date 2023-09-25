import React from 'react';
import { styles } from '../../utis/styles';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import { Button, SocialIcon } from 'react-native-elements'

function FormComponent(props) {
    const { setUsername, setPassword } = props;

    return (
        <>
            <View style={styles.viewForm}>
                <TextInput
                    placeholder="Ingrese su usuario o correo"
                    keyboardType="default"
                    style={styles.input}
                    onChange={(e) => setUsername(e.nativeEvent.text)}
                />
                <TextInput
                    placeholder="Digite su contraseña"
                    keyboardType="visible-password"
                    style={styles.input}
                    onChange={(e) => setPassword(e.nativeEvent.text)}
                />
                <SocialIcon
                    title='Iniciar Sesión'
                    button
                    color="blue"
                />

                <Text style={styles.forgot}>Forgot password?</Text>
            </View>
        </>
    );
}

export default FormComponent;
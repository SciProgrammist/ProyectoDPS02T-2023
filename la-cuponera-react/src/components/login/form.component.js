import React from 'react';
import { styles } from '../../utis/styles';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import { Button, SocialIcon } from 'react-native-elements'
import ForgotPassword from './forgot.component';

function FormComponent(props) {
    const { setUsername, setPassword } = props;

    return (
        <>
            <Text style={styles.text}>Iniciar Sessión</Text>
            <Text style={styles.text}>Bienvenido de nuevo!</Text>

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
               <ForgotPassword/>

                <SocialIcon
                    title='Iniciar Sesión'
                    button
                    style={{ backgroundColor: '#3b5998' }}
                    color="blue"
                />
                <View style={{ display: 'flex' }}>
                    <Text style={styles.sincuenta}>No tienes una cuenta?</Text>
                    <TouchableOpacity onPress={() => { console.log("CREAR CUENTA!"); }}>
                        <Text style={styles.forgot}>Crear cuenta</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </>
    );
}

export default FormComponent;
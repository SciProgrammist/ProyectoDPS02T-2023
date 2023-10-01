import React from 'react';
import { styles } from '../../utis/styles';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import { Button, SocialIcon } from 'react-native-elements'
import ForgotPassword from './forgot.component';

function CreateAccount(props) {
    const { setUsername, setEmail, setPassword } = props;
    const { createAccount } = props;

    return (
        <>
            <Text style={styles.text}>Crear Cuenta</Text>

            <View style={styles.viewForm}>
                <TextInput
                    placeholder="Ingrese su usuario"
                    keyboardType="default"
                    style={styles.input}
                    onChange={(e) => setUsername(e.nativeEvent.text)}
                />
                 <TextInput
                    placeholder="Ingrese su correo"
                    keyboardType="default"
                    style={styles.input}
                    onChange={(e) => setEmail(e.nativeEvent.text)}
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
                    onPress={createAccount}
                    style={{ backgroundColor: '#3b5998' }}
                    color="blue"
                />
                <View style={{ display: 'flex' }}>
                    <Text style={styles.sincuenta}>Ya tienes una cuenta?</Text>
                    <TouchableOpacity onPress={() => { console.log("CREAR CUENTA!"); }}>
                        <Text style={styles.forgot}>Iniciar Sessión</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </>
    );
}

export default FormComponent;
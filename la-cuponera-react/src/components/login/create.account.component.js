import React from 'react';
import { styles } from '../../styles/styles';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import { Button, SocialIcon } from 'react-native-elements'
import Separator from '../generic/separator.component';
import SocialNetworks from './social.networks.component';

function CreateAccountTemplate(props) {
    const { setUsername, setEmail, setPassword, setIsLoggedIn, setIsCreateAccount } = props;
    const { createAccount } = props;
    const { googleLogin } = props;

    function returnLogin() {
        console.log("RETURN LOGIN");
        setIsLoggedIn(false);
        setIsCreateAccount(false);
    }
    
    return (
        <>
            <Text style={styles.createAccountText}>Crear Cuenta</Text>

            <View style={styles.createAccount}>
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

                <SocialIcon
                    title='Crear'
                    button
                    onPress={createAccount}
                    style={{ backgroundColor: '#3b5998', marginTop: 20 }}
                    color="blue"
                />
                <View style={{ display: 'flex', marginTop: 20 }}>
                    <Text style={styles.sincuenta}>Ya tienes una cuenta?</Text>
                    <TouchableOpacity onPress={returnLogin}>
                        <Text style={styles.forgot}>Iniciar Sessión</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ marginTop: 50 }}>
                    <Separator />
                </View>

                <View style={{ marginTop: -85 }}>
                    <SocialNetworks
                        googleLogin={googleLogin} />
                </View>
            </View>
        </>
    );
}

export default CreateAccountTemplate;
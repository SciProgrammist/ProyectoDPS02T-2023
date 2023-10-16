import React, { useEffect, useState } from 'react'
import { styles } from '../../styles/styles';
import { auth } from '../../utis/firebase';
import { Alert, Modal, StyleSheet, Text, Pressable, View, TouchableOpacity, TextInput } from 'react-native';

function ForgotPassword() {
    const [modalVisible, setModalVisible] = useState(false);
    const [correo, setCorreo] = useState("");

    function sendPasswordReset() {
        console.log("STARTING PROCESS SEND EMAIL...");
        setModalVisible(true);
    }

    function Reset() {
        // const email = 'carlossalazar2228@gmail.com';
        setModalVisible(!modalVisible)
        console.log("email for reset password: "+correo);
        auth.sendPasswordResetEmail(correo)
            .then(() => {
                console.log("EMAIL SEND!");
            })
            .catch((e) => {
                console.log(e);
            });

    }
    useEffect(() => { }, [correo])

    return (
        <>
            <View style={styles.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                        setModalVisible(!modalVisible);
                    }}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>Restablecer Contraseña!</Text>
                            <TextInput
                                placeholder="Ingrese su  correo"
                                keyboardType="default"
                                style={styles.inputReset}
                                onChange={(e) => setCorreo(e.nativeEvent.text)}
                            />
                            <TouchableOpacity
                                style={[styles.button, styles.buttonClose]}
                                onPress={Reset}>
                                <Text style={styles.textStyle}>Enviar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>
            <View>
                <TouchableOpacity onPress={sendPasswordReset}>
                    <Text style={styles.forgot}>Forgot password? </Text>
                </TouchableOpacity>
            </View>
        </>

    )
}

export default ForgotPassword;
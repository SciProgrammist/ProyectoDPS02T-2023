import React from "react";
import { styles } from "../../styles/stylesCuponesLista";
import { View, Text, Image, TextInput, TouchableOpacity, Button, FlatList, Modal } from "react-native";

export default function ModalCreate(props) {
    const { addEmpresa } = props;
    const { modalVisible } = props;
    const { setModalVisible } = props;

    //variables para crear empresa
    const { setId } = props;
    const { setNombre } = props;
    const { setCantidad } = props;
    const { setEstado } = props;

    return (
        <View>
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
                        <Text style={styles.modalText}>Crear nueva Empresa</Text>
                        <TextInput
                            placeholder="Ingrese el id"
                            keyboardType="numeric"
                            style={styles.inputReset}
                            onChange={(e) => setId(e.nativeEvent.text)}
                        />
                        <TextInput
                            placeholder="Ingrese el nombre"
                            keyboardType="default"
                            style={styles.inputReset}
                            onChange={(e) => setNombre(e.nativeEvent.text)}
                        />
                        <TextInput
                            placeholder="Ingrese la cantidad de cupones"
                            keyboardType="numeric"
                            style={styles.inputReset}
                            onChange={(e) => setCantidad(e.nativeEvent.text)}
                        />
                        <TextInput
                            placeholder="Ingrese el estado"
                            keyboardType="default"
                            defaultValue="activo"
                            style={styles.inputReset}
                            onChange={(e) => setEstado(e.nativeEvent.text)}
                        />
                        <TouchableOpacity
                            style={[styles.button, styles.buttonClose]}
                            onPress={addEmpresa}>
                            <Text style={styles.textStyle}>Enviar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => { setModalVisible(!modalVisible) }}>
                            <Text style={styles.textStyle}>Cancelar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

import React from "react";
import { styles } from "../../styles/stylesCuponesLista";
import { View, Text, TouchableOpacity, Modal } from "react-native";
import ConfirmacinDeCompraAndroi from "./modal.cupones.component";


export default function ModalViewCupones(props) {
    const { cancelar } = props;
    const { cupon } = props;
    const { modalVisible } = props;
    const { setModalVisible } = props;
    const { currentUsers } = props;
    const { saveCupon } = props;
    const { id } = props;

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
                        <Text style={styles.modalText}>CANJEAR CUPON</Text>

                        <ConfirmacinDeCompraAndroi
                            cupon={cupon}
                            cancelar={cancelar}
                            saveCupon={saveCupon}
                            id={id} />

                    </View>
                </View>
            </Modal>
        </View>
    );
}

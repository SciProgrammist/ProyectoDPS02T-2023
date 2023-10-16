import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Modal } from "react-native";
import { Image } from "expo-image";
import { styles } from "../styles/stylesCuponesLista";
import Cupones from '../utis/cupones.home.json'
import ConfirmacinDeCompraAndroi from "./ConfirmacinDeCompraAndroi";

const HomePageUsuario = () => {
    const [cupones, setcupones] = useState(Cupones);
    const [modalVisible, setModalVisible] = useState(false);

    function canjearCupon() {
        console.log("STARTING PROCESS CANJEAR CUPON...");
        setModalVisible(true);
    }
    function cancelar() {
        console.log("STARTING PROCESS CANJEAR CUPON...");
        setModalVisible(false);
    }
    return (
        <>
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
                        <ConfirmacinDeCompraAndroi />
                        <TouchableOpacity
                            style={[styles.button, styles.buttonClose]}
                            onPress={cancelar}>
                            <Text style={styles.button}>cancelar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            <View style={styles.homePageUsuario}>

                <Text style={[styles.buscarCuponesPor, styles.buscarFlexBox]}>
                    Buscar cupones por empresa
                </Text>
                <Image
                    style={[styles.homePageUsuarioInner, styles.rectangleViewPosition]}
                    contentFit="cover"
                    source={require("../assets/rectangle-1.png")}
                />
                <View style={[styles.rectangleView, styles.rectangleViewPosition]} />
                <Text style={[styles.buscar, styles.buscarFlexBox]}>Buscar</Text>
                <Image
                    style={[styles.searchIcon, styles.starIconLayout]}
                    contentFit="cover"
                    source={require("../assets/search.png")}
                />
                <View style={styles.contenedor}>
                    <FlatList data={cupones}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={canjearCupon}>
                                <View style={[styles.storeItem1, styles.storeItemLayout]}>
                                    <Text style={[styles.text, styles.textTypo]}>{item.descuento}% OFF</Text>
                                    <Text style={[styles.designLeadershipHow, styles.homeTypo]}>
                                        Design Leadership: How Top Design Leaders Build and Grow Successful...
                                        {item.titulo}
                                    </Text>
                                    <View style={[styles.storeItem1Child, styles.storeItem1ChildBg]} />
                                    <View style={styles.starParent}>
                                        <Image
                                            style={styles.starIconLayout}
                                            contentFit="cover"
                                            source={require("../assets/star1.png")}
                                        />
                                        <Image
                                            style={[styles.starIcon1, styles.starIconLayout]}
                                            contentFit="cover"
                                            source={require("../assets/star1.png")}
                                        />
                                        <Image
                                            style={[styles.starIcon1, styles.starIconLayout]}
                                            contentFit="cover"
                                            source={require("../assets/star2.png")}
                                        />
                                        <Image
                                            style={[styles.starIcon1, styles.starIconLayout]}
                                            contentFit="cover"
                                            source={require("../assets/star2.png")}
                                        />
                                        <Image
                                            style={[styles.starIcon1, styles.starIconLayout]}
                                            contentFit="cover"
                                            source={require("../assets/star2.png")}
                                        />
                                    </View>
                                    <Image
                                        style={styles.photographIcon}
                                        contentFit="cover"
                                        source={require("../assets/photograph.png")}
                                    />
                                </View>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            </View>
        </>
    );
};

export default HomePageUsuario;

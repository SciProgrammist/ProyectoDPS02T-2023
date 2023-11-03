import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { styles } from "../../styles/stylesCuponesLista";
import Cupones from '../../utis/cupones.home.json'
import ModalViewCupones from "./modal.view.component";
import Starts from "./starts.component";

const HomePageUsuario = () => {
    const [cupones, setcupones] = useState(Cupones.cupones);
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
            <ModalViewCupones 
                    modalVisible={modalVisible}
                    setModalVisible={setModalVisible}
                    cancelar={cancelar}
                />

            <View style={styles.homePageUsuario}>

                <Text style={[styles.buscarCuponesPor, styles.buscarFlexBox]}>
                    Buscar cupones por empresa
                </Text>
                <Image
                    style={[styles.homePageUsuarioInner, styles.rectangleViewPosition]}
                    contentFit="cover"
                    source={require("../../assets/rectangle-1.png")}
                />
                <View style={[styles.rectangleView, styles.rectangleViewPosition]} />
                <Text style={[styles.buscar, styles.buscarFlexBox]}>Buscar</Text>
                <Image
                    style={[styles.searchIcon, styles.starIconLayout]}
                    contentFit="cover"
                    source={require("../../assets/search.png")}
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
                                    <Starts />
                                    <Image
                                        style={styles.photographIcon}
                                        contentFit="cover"
                                        source={require("../../assets/photograph.png")}
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

import React, { useState, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity, SafeAreaView, TextInput } from "react-native";
import { Image } from "expo-image";
import { styles } from "../../styles/stylesCuponesLista";
import ModalViewCupones from "./modal.view.component";
import Starts from "./starts.component";
import { database } from "../../utis/firebase";
import { color } from "react-native-elements/dist/helpers";
import { auth } from "../../utis/firebase";

const HomePageUsuario = ({ route }) => {
    const [cupones, setcupones] = useState();
    const [cuponselect, setcuponselec] = useState();
    const [modalVisible, setModalVisible] = useState(false);
    const usuario = route.params;
    const [id, setId] = useState(currentUsers != null && currentUsers != undefined ? currentUsers.uid : null);
    const [currentUsers, setCurrentUsers] = useState(auth.currentUser);

    useEffect(() => {
        findAll();
        findById();
    }, [modalVisible, cupones])

    function findById() {
        setId(auth.currentUser != null && auth.currentUser != undefined ? auth.currentUser.uid : null)
        database
            .ref('/usuarios/' + id)
            .once('value')
            .then(snapshot => {
                setCurrentUsers(JSON.parse(JSON.stringify(snapshot.val()).replace("null,", '')))
                //     console.log('User data: ', snapshot.val());
            });
    }

    async function findAll() {

        database
            .ref('/cupones')
            .once('value')
            .then(snapshot => {
                setcupones(JSON.parse(JSON.stringify(snapshot.val()).replace("null,", '')))
            });

    }

    function generarNumeroEnteroAleatorio() {
        return Math.floor(Math.random() * 100); // Genera un número aleatorio entre 0 y 99
    }

    function saveCupon(id) {
        let fechaInt = new Date();
        let idInter = generarNumeroEnteroAleatorio();
        database.ref('cuponesUsuario/' + idInter).set(
            {
                codigoQR: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + id,
                fecha: fechaInt,
                id: id
            }).then(() => {
                console.log("SAVED!");
                setModalVisible(false)
            }
            );
    }

    function canjearCupon(item) {
        console.log("STARTING PROCESS CANJEAR CUPON...");
        setcuponselec(item);
        setModalVisible(true);
        console.log(usuario)
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
                cupon={cuponselect}
                currentUsers={currentUsers}
                id={id}
                saveCupon={saveCupon}
            />

            <View style={styles.homePageUsuario}>


                <View style={styles.contenedor}>

                    <FlatList data={cupones}
                        ListHeaderComponent={() =>

                            <View style={{ height: 100, top: -10 }}>

                                <TextInput placeholder="Buscar cupones por empresa" style={styles.barrabuscar} />

                                <View style={[styles.rectangleView, styles.rectangleViewPosition]} />
                                <Text style={[styles.buscar, styles.buscarFlexBox]}>Buscar</Text>
                                <Image
                                    style={[styles.searchIcon, styles.starIconLayout]}
                                    contentFit="cover"
                                    source={require("../../assets/search.png")}
                                />
                            </View>
                        }
                        renderItem={({ item }) => (

                            <TouchableOpacity style={{ height: 375 }} onPress={() => canjearCupon(item)}>

                                <View style={{ height: 400, width: 375 }}>
                                    <Text style={[styles.text, styles.textTypo]}>{item.descuento}% OFF</Text>
                                    <Text style={[styles.designLeadershipHow, styles.homeTypo]}>
                                        {item.descripcion}
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

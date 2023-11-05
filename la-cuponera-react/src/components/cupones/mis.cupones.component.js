import React, { useState, useEffect } from "react";
import { View, Text, FlatList, ImageBackground, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import ModalViewCupones from "./modal.view.component";
import Starts from "./starts.component";
import { database } from "../../utis/firebase";
import { styles2 } from "../../styles/styleMisCupones";
import { styles } from '../../styles/stylesCuponesLista'
import { color } from "react-native-elements/dist/helpers";

const MyCupons = () => {
    const [minecupones, setMinecupones] = useState();

    useEffect(() => {
        findAll();
    }, [minecupones])


    async function findAll() {

        database
            .ref('/cuponesUsuario')
            .once('value')
            .then(snapshot => {
                setMinecupones(JSON.parse(JSON.stringify(snapshot.val()).replace("null,", '')))
            });
    }



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

                <View style={styles.contenedor2X}>
                    {
                    !(minecupones === null || minecupones === undefined)
                        ? <FlatList data={minecupones}
                            renderItem={({ e }) => (
                                <TouchableOpacity>
                                    <View style={{ backgroundColor: 'red', height:100 }}>
                                        <View>
                                            <Text>{ JSON.stringify(e)}</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            )}
                        />
                        : (<View><Text>Data Loading...</Text></View>)
                    }
                </View>
            </View>
        </>
    );
};

export default MyCupons;










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

    function splitCamposPorGuion(objeto) {
        for (let clave in objeto) {
            if (typeof objeto[clave] === 'string' && objeto[clave].includes('-')) {
                objeto[clave] = objeto[clave].split('-');
            }
        }
        return objeto.split('-')[0];
    }

    async function findCuponById(id) {
       
        database
            .ref('/cupones/' + id)
            .once('value')
            .then(snapshot => {
              //  console.log('User data: ', (JSON.parse(JSON.stringify(snapshot.val()).replace("null,", ''))).titulo);
             return  JSON.parse(JSON.stringify(snapshot.val()).replace("null,", ''));
            });
    }

    function validarCampos(objeto) {

        for (let clave in objeto) {
            if (objeto[clave] === null || objeto[clave] === undefined) {
                return false; // Si encuentra un campo nulo o indefinido, devuelve falso
            }
        }
        return true; // Si todos los campos son válidos, devuelve verdadero
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
                                renderItem={({ item }) => (
                                    <TouchableOpacity>
                                        <View style={{ backgroundColor: '#C7C7C7', height: 250 }}>
                                            <View>
                                                <Image
                                                    style={{
                                                        marginTop: 25,
                                                        marginLeft: -86,
                                                        width: 171,
                                                        height: 176,
                                                        top: "50%",
                                                        left: "50%",
                                                        position: "absolute",
                                                    }}
                                                    resizeMode="cover"
                                                    source={{ uri: `${validarCampos(item) && item != undefined ? item.codigoQR : ''}` }}
                                                />
                                                <Text>
                                                    Fecha Adquirido   {validarCampos(item) && item != undefined ? item.fecha : '...'}
                                                </Text>
                                                <Text>
                                                    Titulo   {validarCampos(item) && item != undefined ? JSON.stringify(findCuponById(splitCamposPorGuion(item.id))) : '...'}
                                                </Text>
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










import React, { useState, useEffect } from "react";
import { View, FlatList, ImageBackground, TouchableOpacity } from "react-native";

import { Image } from "expo-image";
import ModalViewCupones from "./modal.view.component";
import Starts from "./starts.component";
import { database } from "../../utis/firebase";
import { styles2 } from "../../styles/styleMisCupones";
import { styles } from '../../styles/stylesCuponesLista'
import { color } from "react-native-elements/dist/helpers";
import { Text, Card, Button, Icon } from '@rneui/themed';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const MantenimientoCuponesAdmin = () => {
    const [minecupones, setMinecupones] = useState();

    useEffect(() => {
        findAll();
    }, [minecupones])


    async function findAll() {

        database
            .ref('/cupones')
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
                return JSON.parse(JSON.stringify(snapshot.val()).replace("null,", ''));
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

                <View>
                    <Text style={[styles.buscarCuponesPor2, styles.buscarFlexBox]}>
                        Buscar cupones
                    </Text>
                    <Image
                        style={[styles.homePageUsuarioInner2, styles.rectangleViewPosition]}
                        contentFit="cover"
                        source={require("../../assets/rectangle-1.png")}
                    />
                </View>

                <TouchableOpacity onPress={() => {console.log('SEARCHING!!');}}>
                    <View style={[styles.rectangleView2, styles.rectangleViewPosition]} />
                    <Text style={[styles.buscar2, styles.buscarFlexBox]}>Buscar</Text>
                    <Image
                        style={[styles.searchIcon2, styles.starIconLayout]}
                        contentFit="cover"
                        source={require("../../assets/search.png")}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { openModal() }} style={styles.rectangleView3}>
					<Text style={[styles.buscarPosition, styles.buscar3]}>Add
						<MaterialCommunityIcons
							name={'content-save'}
							size={24}
							color="#fff"
							 /></Text>
				</TouchableOpacity>

                <View style={styles.contenedor2X}>
                    {
                        !(minecupones === null || minecupones === undefined)
                            ? <FlatList data={minecupones}
                                renderItem={({ item }) => (
                                    <TouchableOpacity>
                                        <Card>
                                            <Card.Title>{validarCampos(item) && item != undefined ? item.titulo : '...'}</Card.Title>
                                            <Card.Divider />
                                            <Card.Image
                                                style={{ padding: 0 }}
                                                source={{
                                                    uri:
                                                        validarCampos(item) && item != undefined ? item.img : '...',
                                                }}
                                            />
                                            <Text style={{ marginBottom: 10 }}>
                                                {validarCampos(item) && item != undefined ? item.descripcion : '...'}
                                            </Text>
                                            <Button
                                                icon={
                                                    <Icon
                                                        name="code"
                                                        color="#ffffff"
                                                        iconStyle={{ marginRight: 10 }}
                                                    />
                                                }
                                                buttonStyle={{
                                                    borderRadius: 0,
                                                    marginLeft: 0,
                                                    marginRight: 0,
                                                    marginBottom: 0,
                                                }}
                                                title="EDIT"
                                            />
                                        </Card>
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

export default MantenimientoCuponesAdmin;










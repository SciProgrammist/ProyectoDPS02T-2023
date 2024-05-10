
import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { auth } from '../../utis/firebase';
import { database } from '../../utis/firebase';
import { useEffect, useState } from 'react';
import { styles } from "../../styles/styleHomePage";

export default function HomePage(props) {

    const [usuario, setUsuario] = useState(auth.currentUser);
    const [currentUsers, setCurrentUsers] = useState();
    const [id, setId] = useState(usuario.uid);

    function validarCampos(objeto) {
        for (let clave in objeto) {
            if (objeto[clave] === null || objeto[clave] === undefined) {
                return false; // Si encuentra un campo nulo o indefinido, devuelve falso
            }
        }
        return true; // Si todos los campos son válidos, devuelve verdadero
    }

    useEffect(() => {
        findById();
    }, [usuario, currentUsers, id])


    // console.log(id);
    //  console.log(currentUsers);

    function findById() {
        database
            .ref('/usuarios/' + id)
            .once('value')
            .then(snapshot => {
                setCurrentUsers(JSON.parse(JSON.stringify(snapshot.val()).replace("null,", '')))
                //     console.log('User data: ', snapshot.val());
            });
    }

    return (
        <View style={styles.profile}>
            <View style={[styles.iphone143, styles.iphone143Position]}>

                <Image
                    style={styles.iphone143Child}
                    resizeMode="cover"
                    source={{ uri: `${validarCampos(currentUsers) && currentUsers != undefined ? currentUsers.img : ''}` }}
                />
                <View style={[styles.nameParent, styles.parentLayout]}>
                    <Text style={[styles.name, styles.nameTypo]}>Name</Text>
                    <View style={[styles.rectangleParent, styles.groupChildLayout]}>
                        <View style={[styles.groupChild, styles.groupChildLayout]} />
                        <Text style={[styles.melissaPeters, styles.textTypo]}>
                            {validarCampos(currentUsers) && currentUsers != undefined ? currentUsers.nombre : ''}
                        </Text>
                    </View>
                </View>
                <View style={[styles.emailParent, styles.parentLayout]}>
                    <Text style={[styles.name, styles.nameTypo]}>Email</Text>
                    <View style={[styles.rectangleParent, styles.groupChildLayout]}>
                        <View style={[styles.groupChild, styles.groupChildLayout]} />
                        <Text style={[styles.melissaPeters, styles.textTypo]}>
                            {validarCampos(currentUsers) && currentUsers != undefined ? currentUsers.email : ''}
                        </Text>
                    </View>
                </View>
                <View style={[styles.passwordParent, styles.parentLayout]}>
                    <Text style={[styles.name, styles.nameTypo]}>Password</Text>
                    <View style={[styles.rectangleParent, styles.groupChildLayout]}>
                        <View style={[styles.groupChild, styles.groupChildLayout]} />
                        <Text style={[styles.text, styles.textTypo]}>************</Text>
                    </View>
                </View>
                <View style={[styles.dateOfBirthParent, styles.parentLayout]}>
                    <Text style={[styles.name, styles.nameTypo]}>Date of Birth</Text>
                    <View style={[styles.rectangleParent, styles.groupChildLayout]}>
                        <View style={[styles.groupChild, styles.groupChildLayout]} />
                        <Text style={[styles.melissaPeters, styles.textTypo]}>
                            23/05/1995
                        </Text>
                    </View>
                </View>
                <View style={[styles.countryregionParent, styles.parentLayout]}>
                    <Text style={[styles.name, styles.nameTypo]}>Country/Region</Text>
                    <View style={[styles.rectangleParent, styles.groupChildLayout]}>
                        <View style={[styles.groupChild, styles.groupChildLayout]} />
                        <Text style={[styles.melissaPeters, styles.textTypo]}>Nigeria</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}


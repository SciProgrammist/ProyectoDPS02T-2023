import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { auth } from '../../utis/firebase';
import { database } from '../../utis/firebase';
import { useEffect, useState } from 'react';

export default function HomePage(props) {

    const [usuario, setUsuario] = useState(auth.currentUser);
    const [currentUsers, setCurrentUsers] = useState();
    const [id, setId] = useState(usuario.uid);


    useEffect(() => {
        findById();
    }, [usuario, currentUsers, id])



    function findById() {
        database
            .ref('/usuarios/' + id)
            .once('value')
            .then(snapshot => {
                setCurrentUsers(JSON.parse(JSON.stringify(snapshot.val()).replace("null,", '')))
           //     console.log('User data: ', snapshot.val());
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


   // console.log(id);
   //  console.log(currentUsers);
    
    return (
        <View style={{ margin: 'auto', margin: 5, padding: 5, width: '100%', height: '100%', alignItems: 'center' }}>
            <Text>Home Page </Text>
            <Text>Usuario Ingresado: {validarCampos(currentUsers) && currentUsers != undefined ? currentUsers.nombre : ''} </Text>
            <Text>Correo: {validarCampos(currentUsers) && currentUsers != undefined ? currentUsers.email : ''} </Text>
            <Text>Estado: {validarCampos(currentUsers) && currentUsers != undefined ? currentUsers.estado : ''} </Text>
        </View>
    );
}

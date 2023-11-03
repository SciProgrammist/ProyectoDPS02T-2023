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
    }, [usuario])



    function findById() {
        database
            .ref('/usuarios/' + id)
            .once('value')
            .then(snapshot => {
                setCurrentUsers(JSON.parse(JSON.stringify(snapshot.val()).replace("null,", '')))
                console.log('User data: ', snapshot.val());
            });
    }

    console.log(id);
    return (
        <View style={{ margin: 'auto', margin: 5, padding: 5, width: '100%', height: '100%', alignItems: 'center' }}>
            <Text>Home Page </Text>
            <Text>Usuario Ingresado: {currentUsers.nombre} </Text>
            <Text>Correo: {currentUsers.email} </Text>
            <Text>Estado: {currentUsers.estado} </Text>
        </View>
    );
}

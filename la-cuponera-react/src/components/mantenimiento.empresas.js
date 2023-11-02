import React, { useState, useEffect } from "react";
import { View, Text, Image, TextInput, TouchableOpacity, Button, FlatList, Modal } from "react-native";

import { styles } from "../styles/styles.mantenimiento"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { database } from "../utis/firebase";

const MantenimientoEmpresasAndroi = () => {
	//variables para crear una nueva empresa
	const [nombre, setNombre] = useState("");
	const [cantidad, setCantidad] = useState(0);
	const [id, setId] = useState(0);
	const [estado, setEstado] = useState("activo");


	const [cupones, setcupones] = useState();
	const [buscado, setbuscado] = useState('');
	const [modalVisible, setModalVisible] = useState(false);

	const [cupon, setCupon] = useState({
		id: 0,
		nombre: '',
		cantidad: 0,
		estado: 'activo'
	});

	useEffect(() => {
		findAll();
	}, [modalVisible, cupones, nombre, cantidad, id, estado])


	const buscar = () => {
		if (!buscado) {
			findAll();
		} else {
			const encontrado = cupones.empresas.filter(item => item.nombre.includes(buscado));
			setcupones(encontrado);
		}
	}

	function openModal() {
		console.log("STARTING PROCESS CREATE EMPRESA...");
		setModalVisible(true);
	}


	function addEmpresa() {
		database.ref('empresas/' + id).set({
			id: id,
			nombre: nombre,
			cantidad: cantidad,
			estado: estado
		}).then(() => {
			console.log("SAVED!");
			setModalVisible(false)
		}
		);
	}

	async function findAll() {

		database
			.ref('/empresas')
			.once('value')
			.then(snapshot => {
				setcupones(JSON.parse(JSON.stringify(snapshot.val()).replace("null,", '')))
			});

	}

	function findById(id) {
		database
			.ref('/empresas/' + id)
			.once('value')
			.then(snapshot => {
				console.log('User data: ', snapshot.val());
			});
	}

	function removeById(id) {
		database
			.ref('/empresas/' + id)
			.remove(id);
	}

	function updateEmpresa(id) {

		var updates = {};
		updates['/empresas/' + id] = cupon;
		database.ref('empresas/' + id).update(updates);
		alert('Empresa Updated');

	}


	return (
		<View style={styles.mantenimientoEmpresasAndroi1}>
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
						<Text style={styles.modalText}>Crear nueva Empresa</Text>
						<TextInput
							placeholder="Ingrese el id"
							keyboardType="numeric"
							style={styles.inputReset}
							onChange={(e) => setId(e.nativeEvent.text)}
						/>
						<TextInput
							placeholder="Ingrese el nombre"
							keyboardType="default"
							style={styles.inputReset}
							onChange={(e) => setNombre(e.nativeEvent.text)}
						/>
						<TextInput
							placeholder="Ingrese la cantidad de cupones"
							keyboardType="numeric"
							style={styles.inputReset}
							onChange={(e) => setCantidad(e.nativeEvent.text)}
						/>
						<TextInput
							placeholder="Ingrese el estado"
							keyboardType="default"
							defaultValue="activo"
							style={styles.inputReset}
							onChange={(e) => setEstado(e.nativeEvent.text)}
						/>
						<TouchableOpacity
							style={[styles.button, styles.buttonClose]}
							onPress={addEmpresa}>
							<Text style={styles.textStyle}>Enviar</Text>
						</TouchableOpacity>
					</View>
				</View>
			</Modal>
			<TextInput onChangeText={(txt) => setbuscado(txt)} placeholder="Buscar Empresa" style={[styles.buscarEmpresa]} />
			<View />
			<View style={styles.container2}>
				<TouchableOpacity onPress={buscar} style={styles.rectangleView}>
					<Text style={[styles.buscarPosition, styles.buscar]}>Search
						<MaterialCommunityIcons
							name={'home-search'}
							size={24}
							color="#fff"
							style={styles.icon2} /></Text>
				</TouchableOpacity>

			</View>
			<View style={styles.container2}>
				<TouchableOpacity onPress={() => { openModal() }} style={styles.rectangleView2}>
					<Text style={[styles.buscarPosition, styles.buscar]}>Add
						<MaterialCommunityIcons
							name={'content-save'}
							size={24}
							color="#fff"
							style={styles.icon2} /></Text>
				</TouchableOpacity>
			</View>


			<Text style={[styles.estado, styles.buscarClr]}>estado</Text>
			<Text style={[styles.nombreEmpresa, styles.buscarClr]}>nombre Empresa</Text>
			<View style={styles.contenedor}>
				<FlatList data={cupones}
					keyExtractor={(item, index) => item.key}
					renderItem={({ item }) => (
						<View>
							<View style={styles.transactionNameParent}>
								<Text style={[styles.transactionName, styles.homeTypo]}>{item["nombre"]}</Text>
								<Text style={[styles.yesterday1249Pm, styles.text10Typo]}>cantidad {item["cantidad"]}</Text>
							</View>
							<Text style={[styles.text10, styles.text10Typo]}>{item["estado"]}</Text>
						</View>
					)}
				/>
			</View>
		</View>

	);
};

export default MantenimientoEmpresasAndroi;

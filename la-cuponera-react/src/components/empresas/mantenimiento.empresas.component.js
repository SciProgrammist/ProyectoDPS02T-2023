import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList  } from "react-native";

import { styles } from "../../styles/styles.mantenimiento"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { database } from "../../utis/firebase";
import ModalCreate from "./modal.create.component";

const MantenimientoEmpresasAndroi = () => {
	//variables para crear una nueva empresa
	const [nombre, setNombre] = useState("");
	const [cantidad, setCantidad] = useState(0);
	const [id, setId] = useState(0);
	const [estado, setEstado] = useState("activo");


	const [cupones, setcupones] = useState();
	const [buscado, setbuscado] = useState('');

	//modal variables
	const [modalVisibleEdit, setModalVisibleEdit] = useState(false);
	const [modalVisible, setModalVisible] = useState(false);

	const [cupon, setCupon] = useState({
		id: 0,
		nombre: '',
		cantidad: 0,
		estado: 'activo'
	});

	useEffect(() => {
		findAll();
	}, [modalVisible, modalVisibleEdit, cupones, nombre, cantidad, id, estado])


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

	function openModalEdit() {
		console.log("STARTING PROCESS UPDATE EMPRESA...");
		setModalVisibleEdit(true);
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
			<ModalCreate
				addEmpresa={addEmpresa}
				modalVisible={modalVisible}
				setModalVisible={setModalVisible}
				setId={setId}
				setNombre={setNombre}
				setEstado={setEstado}
				setCantidad={setCantidad}
			/>
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


			<Text style={[styles.estado, styles.buscarClr]}>Estado</Text>
			<Text style={[styles.editar, styles.buscarClr]}>Editar</Text>
			<Text style={[styles.nombreEmpresa, styles.buscarClr]}>Nombre Empresa</Text>
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
							<Text style={[styles.text11, styles.text10Typo]}>
								<TouchableOpacity onPress={() => { () => { console.log('editar!'); } }} style={styles.rectangleView3}>
									<Text style={[styles.buscarPosition, styles.buscar]}>Edit
										<MaterialCommunityIcons
											name={'circle-edit-outline'}
											size={24}
											color="#000"
											style={styles.icon3} /></Text>
								</TouchableOpacity>
							</Text>

						</View>
					)}
				/>
			</View>
		</View>

	);
};

export default MantenimientoEmpresasAndroi;

import React, { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity, Button, FlatList } from "react-native";
import Cupones from '../utis/cupones.json'
import { styles } from "../styles/styles.mantenimiento"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { database } from "../utis/firebase";

const MantenimientoEmpresasAndroi = () => {
	const [cupones, setcupones] = useState(Cupones.empresas);
	const [buscado, setbuscado] = useState('');
	const [cupon, setCupon] = useState({
		id: 0,
		nombre: '',
		cantidad: 0,
		estado: 'activo'
	});

	const buscar = () => {
		if (!buscado) {
			setcupones(Cupones.empresas);
		} else {
			const encontrado = Cupones.empresas.filter(item => item.nombre.includes(buscado));
			setcupones(encontrado);
		}
	}

	//function addEmpresa(nombre, cantidad, estado, id) {
	function addEmpresa() {
		database.ref('empresas/' + 1001).set({
			id: 1001,
			nombre: 'nueva empresa',
			cantidad: 1,
			estado: 'activo'
		});
	}

	return (
		<View style={styles.mantenimientoEmpresasAndroi1}>
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
				<TouchableOpacity onPress={() => { addEmpresa() }} style={styles.rectangleView2}>
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
				<FlatList data={Cupones.empresas}
					renderItem={({ item }) => (
						<View>
							<View style={styles.transactionNameParent}>
								<Text style={[styles.transactionName, styles.homeTypo]}>{item.nombre}</Text>
								<Text style={[styles.yesterday1249Pm, styles.text10Typo]}>cantidad {item["cantidad"]}</Text>
							</View>
							<Text style={[styles.text10, styles.text10Typo]}>{item.estado}</Text>
						</View>
					)}
				/>
			</View>
		</View>

	);
};

export default MantenimientoEmpresasAndroi;

import React, { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity, Button, FlatList } from "react-native";
import Cupones from '../utis/cupones.json'
import { styles } from "../utis/styles.mantenimiento"
import { MaterialCommunityIcons } from '@expo/vector-icons';

const MantenimientoEmpresasAndroi = () => {
	const [cupones, setcupones] = useState(Cupones);
	const [buscado, setbuscado] = useState('');

	const buscar = () => {
		if (!buscado) {
			setcupones(Cupones);
		} else {
			const encontrado = cupones.filter(item => item.Nombre.includes(buscado));
			setcupones(encontrado);
		}
	}

	return (
		<View style={styles.mantenimientoEmpresasAndroi1}>
			<TextInput onChangeText={(txt) => setbuscado(txt)} placeholder="Buscar Empresa" style={[styles.buscarEmpresa]} />
			<View />
			<View style={styles.container2}>
				<TouchableOpacity onPress={buscar} style={styles.rectangleView}>
					<Text style={[styles.buscarPosition, styles.buscar]}>Buscar
						<MaterialCommunityIcons
							name={'home-search'}
							size={24}
							color="#fff"
							style={styles.icon2} /></Text>
				</TouchableOpacity>

			</View>

			<Text style={[styles.estado, styles.buscarClr]}>Estado</Text>
			<Text style={[styles.nombreEmpresa, styles.buscarClr]}>Nombre Empresa</Text>
			<View style={styles.contenedor}>
				<FlatList data={cupones}
					renderItem={({ item }) => (
						<View>
							<View style={styles.transactionNameParent}>
								<Text style={[styles.transactionName, styles.homeTypo]}>{item.Nombre}</Text>
								<Text style={[styles.yesterday1249Pm, styles.text10Typo]}>Cupones Activos {item["Cupones activos"]}</Text>
							</View>
							<Text style={[styles.text10, styles.text10Typo]}>{item.Estado}</Text>
						</View>
					)}
				/>
			</View>
		</View>

	);
};

export default MantenimientoEmpresasAndroi;

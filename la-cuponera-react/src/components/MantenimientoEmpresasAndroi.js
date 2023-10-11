import React, { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity, Button, FlatList } from "react-native";
import Cupones from '../utis/cupones.json'
import { styles } from "../utis/styles.mantenimiento"

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
			<TouchableOpacity onPress={buscar} style={styles.rectangleView}>
				<Text style={[styles.buscarPosition, styles.buscar]}>Buscar</Text>
			</TouchableOpacity>
			<Image style={[styles.searchIcon1, styles.iconLayout]} resizeMode="cover" source="search.png" />
			<View style={[styles.sideNavigationItem1, styles.itemBg]}>
				<Text style={[styles.home, styles.homeTypo]}>Home</Text>
				<Image style={[styles.homeIcon1, styles.homePosition]} resizeMode="cover" source="home.png" />
				<Image style={styles.chevronRightIcon1} resizeMode="cover" source="chevron-right.png" />
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

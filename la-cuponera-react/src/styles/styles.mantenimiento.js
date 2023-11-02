import { StyleSheet } from "react-native";
import colors
 from "../utis/colors";
import { auth } from "../utis/firebase";
export const styles = StyleSheet.create({
	sideNavigationItem1Position: {
		top: 0,
		position: "absolute"
	},
	icon2: { 
		marginLeft: 15,
	},
	icon3: { 
		marginLeft: 5,
	},
	crearTypo: {
		color: "rgba(255, 255, 255, 0.9)",

		fontWeight: "600",
		fontSize: 14
	},
	buscarClr: {
		color: "rgba(0, 0, 0, 0.7)",
	},
	lineViewBorder: {
		borderStyle: "solid",
		position: "absolute"
	},
	buscarPosition: {
		textAlign: "left",
		position: "absolute",
	},
	iconLayout: {
		height: 24,
		width: 24,
		overflow: "hidden"
	},
	itemBg: {
		backgroundColor: "#eef1f4",
		overflow: "hidden"
	},
	homeTypo: {
		color: "#545f71",
		lineHeight: 22,
		letterSpacing: -0.3,
		fontSize: 16,
		textAlign: "left"
	},
	homePosition: {
		top: "50%",
		position: "absolute"
	},
	transactionItemLayout: {
		padding: 12,
		alignItems: "center",
		flexDirection: "row",
		height: 58,
		width: 337,
		borderBottomWidth: 1,
		borderColor: "#eef1f4",
		borderStyle: "solid",
		position: "absolute",
		overflow: "hidden",
		backgroundColor: "#fff"
	},
	text10Typo: {
		color: "#545f71",
		lineHeight: 22,
		letterSpacing: -0.3,
		fontSize: 16
	},
	imageIconPosition2: {
		left: 30,
		height: 24,
		width: 24,
		position: "absolute",
		overflow: "hidden"
	},
	transactionItemPosition1: {
		left: 6,
		padding: 12,
		alignItems: "center",
		flexDirection: "row",
		height: 58,
		width: 337,
		borderBottomWidth: 1,
		borderColor: "#eef1f4",
		borderStyle: "solid",
		position: "absolute",
		overflow: "hidden",
		backgroundColor: "#fff"
	},
	transactionItemPosition: {
		left: 7,
		padding: 12,
		alignItems: "center",
		flexDirection: "row",
		height: 58,
		width: 337,
		borderBottomWidth: 1,
		borderColor: "#eef1f4",
		borderStyle: "solid",
		position: "absolute",
		overflow: "hidden",
		backgroundColor: "#fff"
	},
	imageIconPosition1: {
		left: 32,
		height: 24,
		width: 24,
		position: "absolute",
		overflow: "hidden"
	},
	imageIconPosition: {
		left: 31,
		height: 24,
		width: 24,
		position: "absolute",
		overflow: "hidden"
	},
	mantenimientoEmpresasAndroiChild: {
		left: 0,
		backgroundColor: "rgba(217, 217, 217, 0.02)",
		width: 360,
		height: 800
	},
	iniciarSesinCon1: {
		top: 696,
		left: 95,
		textAlign: "left",
		position: "absolute"
	},
	crear: {
		top: 536,
		left: 160,
		textAlign: "left",
		position: "absolute"
	},
	buscarCuponesPor1: {
		top: 203,
		left: 44,
		fontSize: 12,

		textAlign: "left",
		position: "absolute"
	},
	mantenimientoEmpresasAndroiInner: {
		left: 14,
		borderRadius: 10,
		backgroundColor: "rgba(255, 255, 255, 0.08)",
		borderColor: "rgba(0, 0, 0, 0.4)",
		borderWidth: 1,
		width: 216,
		height: 49,
		top: 75
	},
	buscarEmpresa: {
		position: 'absolute',
		borderRadius: 10,
		backgroundColor: "rgba(255, 255, 255, 0.08)",
		borderStyle: "solid",
		borderColor: "rgba(0, 0, 0, 0.4)",
		borderWidth: 1,
		width: 105,
		height: 49,
		left: 15,
		top: 76,
	},
	rectangleView2: {
		left: 250,
		borderRadius: 5,
		backgroundColor: "#0e64d2",
		width: 110,
		height: 48,
		top: 75,
		position: "absolute"
	},
	rectangleView3: {
		left: 250,
		borderRadius: 5,
		backgroundColor: "#0e64d2",
		width: 75,
		height: 48,
		top: 75,
		position: "absolute"
	},
	rectangleView: {
		left: 125,
		borderRadius: 5,
		backgroundColor: "#0e64d2",
		width: 110,
		height: 48,
		top: 75,
		position: "absolute"
	},
	buscar: {
		left: 20,
		top: 10,
		color: "rgba(255, 255, 255, 0.9)",

		fontWeight: "600",
		fontSize: 14,
	},
	searchIcon1: {
		top: 87,
		left: 310,
		position: "absolute"
	},
	home: {
		marginTop: -10,
		left: 64,

		top: "50%",
		position: "absolute",
		fontWeight: "600",
		color: "#545f71",
		lineHeight: 22,
		letterSpacing: -0.3,
		fontSize: 16
	},
	homeIcon1: {
		marginTop: -12,
		left: 16,
		height: 24,
		width: 24,
		overflow: "hidden"
	},
	chevronRightIcon1: {
		top: 16,
		right: 8,
		width: 20,
		height: 20,
		position: "absolute",
		overflow: "hidden"
	},
	sideNavigationItem1: {
		left: -7,
		borderRadius: 8,
		width: 367,
		height: 52,
		top: 0,
		position: "absolute"
	},
	transactionItemChild: {
		borderRadius: 72,
		width: 48,
		height: 48
	},
	transactionName: {
		fontWeight: "700",
	},
	yesterday1249Pm: {
		marginTop: 2,
		textAlign: "left"
	},
	transactionNameParent: {
		marginLeft: 25,
		flex: 1
	},
	text10: {
		left: 200,
		top: -46,
		marginLeft: 16
	},
	text11: {
		left: 280,
		top: -62,
		marginLeft: 16
	},
	transactionItem: {
		top: 174,
		left: 5,
		padding: 12,
		alignItems: "center",
		flexDirection: "row",
		height: 58,
		width: 337,
		borderBottomWidth: 1,
		borderColor: "#eef1f4"
	},
	transactionItem1: {
		top: 238,
		left: 5,
		padding: 12,
		alignItems: "center",
		flexDirection: "row",
		height: 58,
		width: 337,
		borderBottomWidth: 1,
		borderColor: "#eef1f4"
	},
	imageUserIcon10: {
		top: 252
	},
	imageUserIcon11: {
		top: 188
	},
	lineView: {
		top: 138,
		left: 17,
		borderColor: "#9ba5b7",
		borderTopWidth: 1,
		width: 326,
		height: 1
	},
	estado: {
		top: 147,
		left: 215,
		textAlign: "left",
		fontWeight: 'bold',
		fontSize: 14,
		position: "absolute"
	},
	editar: {
		top: 147,
		left: 300,
		textAlign: "left",
		fontWeight: 'bold',
		fontSize: 14,
		position: "absolute"
	},
	nombreEmpresa: {
		top: 146,
		left: 26,
		textAlign: "left",
		fontWeight: 'bold',
		fontSize: 14,
		position: "absolute"
	},
	transactionItem2: {
		top: 296
	},
	transactionItem3: {
		top: 354
	},
	transactionItem4: {
		top: 415,
		left: 5,
		padding: 12,
		alignItems: "center",
		flexDirection: "row",
		height: 58,
		width: 337,
		borderBottomWidth: 1,
		borderColor: "#eef1f4"
	},
	transactionItem5: {
		top: 473,
		left: 5,
		padding: 12,
		alignItems: "center",
		flexDirection: "row",
		height: 58,
		width: 337,
		borderBottomWidth: 1,
		borderColor: "#eef1f4"
	},
	transactionItem6: {
		top: 528,
		left: 5,
		padding: 12,
		alignItems: "center",
		flexDirection: "row",
		height: 58,
		width: 337,
		borderBottomWidth: 1,
		borderColor: "#eef1f4"
	},
	transactionItem7: {
		top: 581
	},
	transactionItem8: {
		top: 639
	},
	transactionItem9: {
		top: 692,
		left: 8
	},
	imageUserIcon12: {
		top: 711
	},
	imageUserIcon13: {
		top: 657
	},
	imageUserIcon14: {
		top: 599
	},
	imageUserIcon15: {
		top: 546
	},
	imageUserIcon16: {
		top: 491
	},
	imageUserIcon17: {
		top: 432
	},
	imageUserIcon18: {
		top: 314
	},
	imageUserIcon19: {
		top: 372
	},
	mantenimientoEmpresasAndroi1: {
		width: "100%",
		overflow: "hidden",
		height: 800,
		flex: 1,
		backgroundColor: "#fff"
	},
	contenedor: {
		alignContent: 'center',
		top: 200,
		height: 550,
	},

	//ESTILOS MODAL CREAR EMPRESA
	centeredView: {
		justifyContent: 'center',
		margin: 'auto',
		width: '80%',
		height: '100%',
	  },
	  modalView: {
		margin: 5,
		backgroundColor: 'white',
		borderRadius: 5,
		alignItems: 'center',
		shadowColor: '#000',
		shadowOffset: {
		  width: 0,
		  height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
	  },
	  button: {
		backgroundColor: colors.ORANGE,
		padding: 16,
		margin: 16,
		borderRadius: 5,
		width: '75%',
	  },
	  inputReset: {
		height: 50,
		backgroundColor: '#fff',
		borderWidth: 1,
		borderColor: colors.PRIMARY_COLOR,
		borderRadius: 6,
		width: '80%',
		margin: 10,
		color: '#000',
		paddingHorizontal: 20,
	  },
	  textStyle: {
		color: 'white',
		fontWeight: 'bold',
		textAlign: 'center',
	  },
});

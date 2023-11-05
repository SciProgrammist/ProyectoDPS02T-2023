import { StyleSheet } from "react-native";
import { Border, Color, FontFamily, FontSize } from "./styles.cupones";

export const styles = StyleSheet.create({
    buscarFlexBox: {
        textAlign: "left",
        position: "absolute",
    },
    rectangleViewPosition: {
        top: 64,
        position: "absolute",
    },
    starIconLayout: {
        height: 24,
        width: 24,
        overflow: "hidden",
    },
    storeItemLayout: {
        width: 345,
        borderRadius: Border.br_base,
        overflow: "hidden",
        backgroundColor: Color.white,
    },
    textTypo: {
        textAlign: "right",
        color: Color.primary,
        fontFamily: FontFamily.h3,
        fontWeight: "700",
        lineHeight: 30,
        letterSpacing: -0.5,
        fontSize: FontSize.h3_size,
        position: "absolute",
    },
    homeTypo: {
        lineHeight: 22,
        letterSpacing: -0.3,
        fontSize: FontSize.bodyHeavy_size,
        color: Color.primary,
        textAlign: "left",
    },
    storeItem1ChildBg: {
        backgroundColor: Color.tertiary,
        borderRadius: Border.br_5xs,
        position: "absolute",
    },
    homePosition: {
        top: "50%",
        position: "absolute",
    },
    homePageUsuarioChild: {
        left: 0,
        backgroundColor: Color.colorGainsboro,
        width: 360,
        top: 0,
        position: "absolute",
        height: 800,
    },
    iniciarSesinCon: {
        top: 681,
        left: 90,
        color: Color.colorGray_100,
        fontFamily: FontFamily.poppinsSemiBold,
        fontSize: FontSize.size_sm,
        textAlign: "left",
        fontWeight: "600",
    },
    crear: {
        top: 521,
        left: 155,
        color: Color.colorGray_100,
        fontFamily: FontFamily.poppinsSemiBold,
        fontSize: FontSize.size_sm,
        textAlign: "left",
        fontWeight: "600",
    },
    buscarCuponesPor: {
        top: 81,
        left: 33,
        fontSize: 12,
        fontFamily: FontFamily.poppinsRegular,
        color: "rgba(0, 0, 0, 0.7)",
    },
    homePageUsuarioInner: {
        left: 14,
        borderRadius: 10,
        width: 216,
        height: 49,
    },
    rectangleView: {
        left: 237,
        borderRadius: 5,
        backgroundColor: "#0e64d2",
        width: 110,
        height: 48,
    },
    buscar: {
        top: 76,
        left: 247,
        color: Color.colorGray_100,
        fontFamily: FontFamily.poppinsSemiBold,
        fontSize: FontSize.size_sm,
        textAlign: "left",
        fontWeight: "600",
    },
    searchIcon: {
        top: 73,
        left: 311,
        position: "absolute",
    },
    text: {
        right: 24,
        top: 285,
        color: Color.primary,
        fontFamily: FontFamily.h3,
        fontWeight: "700",
        lineHeight: 30,
        letterSpacing: -0.5,
        fontSize: FontSize.h3_size,
    },
    designLeadershipHow: {
        top: 225,
        fontFamily: FontFamily.body,
        width: 291,
        left: 24,
        position: "absolute",
    },
    storeItem1Child: {
        top: 24,
        height: 185,
        left: 24,
        right: 24,
    },
    starIcon1: {
        marginLeft: 2,
    },
    starParent: {
        top: 315,
        flexDirection: "row",
        left: 24,
    },
    photographIcon: {
        marginLeft: -16.5,
        top: 100,
        left: "50%",
        width: 32,
        height: 32,
        position: "absolute",
        overflow: "hidden",
    },
    storeItem1: {
        top: 121,
        left: 8,
        height: 350,
    },
    text1: {
        display: "none",
        right: 24,
        top: 285,
        color: Color.primary,
        fontFamily: FontFamily.h3,
        fontWeight: "700",
        lineHeight: 30,
        letterSpacing: -0.5,
        fontSize: FontSize.h3_size,
    },
    storeItem2: {
        top: 435,
        left: 7,
        height: 325,
    },
    off: {
        top: 717,
        right: 38,
    },
    home: {
        marginTop: -10,
        left: 64,
        fontFamily: FontFamily.bodyHeavy,
        lineHeight: 22,
        letterSpacing: -0.3,
        fontSize: FontSize.bodyHeavy_size,
        color: Color.primary,
        textAlign: "left",
        fontWeight: "600",
        top: "50%",
    },
    homeIcon: {
        marginTop: -12,
        left: 16,
        height: 24,
        width: 24,
        overflow: "hidden",
    },
    chevronRightIcon: {
        top: 16,
        right: 8,
        width: 20,
        height: 20,
        position: "absolute",
        overflow: "hidden",
    },
    sideNavigationItem: {
        left: -7,
        width: 367,
        height: 52,
        top: 0,
        overflow: "hidden",
    },
    homePageUsuario: {
        flex: 1,
        width: "100%",
        overflow: "hidden",
        height: 800,
        backgroundColor: Color.white,
    },
    contenedor: {
		alignContent: 'center',
        width:500,
		height: 550,
	},
    contenedor2X: {
        marginLeft:'10%',
        top:150,
        backgroundColor: '#C7C7C7',
        width:300,
		height: 485,
	},
    centeredView: {
        width: '100%',
        height: '100%',
        margin:'auto'
      },
      modalView: {
        margin: 5,
        height: '100%',
        backgroundColor: 'white',
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      buttonOpen: {
        backgroundColor: '#F194FF',
      },
      buttonClose: {
        backgroundColor: '#2196F3',
      },
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      modalText: {
        marginBottom: 15,
        margin: 5,
        padding: 2,
        textAlign: 'center',
      },
});

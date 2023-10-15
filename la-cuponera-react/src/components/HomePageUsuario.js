import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Border, Color, FontFamily, FontSize } from "../utis/styles.cupones";

const HomePageUsuario = () => {
    return (
        <View style={styles.homePageUsuario}>
            <View style={styles.homePageUsuarioChild} />
            <View style={styles.homePageUsuarioChild} />
            <Text style={[styles.iniciarSesinCon, styles.buscarFlexBox]}>
                Iniciar sesión con Facebook
            </Text>
            <Text style={[styles.crear, styles.buscarFlexBox]}>Crear</Text>
            <Text style={[styles.buscarCuponesPor, styles.buscarFlexBox]}>
                Buscar cupones por empresa
            </Text>
            <Image
                style={[styles.homePageUsuarioInner, styles.rectangleViewPosition]}
                contentFit="cover"
                source={require("../assets/rectangle-1.png")}
            />
            <View style={[styles.rectangleView, styles.rectangleViewPosition]} />
            <Text style={[styles.buscar, styles.buscarFlexBox]}>Buscar</Text>
            <Image
                style={[styles.searchIcon, styles.starIconLayout]}
                contentFit="cover"
                source={require("../assets/search.png")}
            />
            <View style={[styles.storeItem1, styles.storeItemLayout]}>
                <Text style={[styles.text, styles.textTypo]}>30% OFF</Text>
                <Text style={[styles.designLeadershipHow, styles.homeTypo]}>
                    Design Leadership: How Top Design Leaders Build and Grow Successful...
                </Text>
                <View style={[styles.storeItem1Child, styles.storeItem1ChildBg]} />
                <View style={styles.starParent}>
                    <Image
                        style={styles.starIconLayout}
                        contentFit="cover"
                        source={require("../assets/star.png")}
                    />
                    <Image
                        style={[styles.starIcon1, styles.starIconLayout]}
                        contentFit="cover"
                        source={require("../assets/star1.png")}
                    />
                    <Image
                        style={[styles.starIcon1, styles.starIconLayout]}
                        contentFit="cover"
                        source={require("../assets/star2.png")}
                    />
                    <Image
                        style={[styles.starIcon1, styles.starIconLayout]}
                        contentFit="cover"
                       /* source={require("../assets/star3.png")} */
                    />
                    <Image
                        style={[styles.starIcon1, styles.starIconLayout]}
                        contentFit="cover"
                      /*  source={require("../assets/star4.png")}  */
                    />
                </View>
                <Image
                    style={styles.photographIcon}
                    contentFit="cover"
                    source={require("../assets/photograph.png")}
                />
            </View>
            <View style={[styles.storeItem2, styles.storeItemLayout]}>
                <Text style={[styles.text1, styles.textTypo]}>$ 38.95</Text>
                <Text style={[styles.designLeadershipHow, styles.homeTypo]}>
                    Design Leadership: How Top Design Leaders Build and Grow Successful...
                </Text>
                <View style={[styles.storeItem1Child, styles.storeItem1ChildBg]} />
                <View style={styles.starParent}>
                    <Image
                        style={styles.starIconLayout}
                        contentFit="cover"
                     /*   source={require("../assets/star5.png")}  */
                    />
                    <Image
                        style={[styles.starIcon1, styles.starIconLayout]}
                        contentFit="cover"
                    /*    source={require("../assets/star6.png")}  */
                    />
                    <Image
                        style={[styles.starIcon1, styles.starIconLayout]}
                        contentFit="cover"
                      /*  source={require("../assets/star7.png")}  */
                    />
                    <Image
                        style={[styles.starIcon1, styles.starIconLayout]}
                        contentFit="cover"
                      /*  source={require("../assets/star8.png")}   */
                    />
                    <Image
                        style={[styles.starIcon1, styles.starIconLayout]}
                        contentFit="cover"
                      /*  source={require("../assets/star9.png")}   */
                    />
                </View>
                <Image
                    style={styles.photographIcon}
                    contentFit="cover"
                /*    source={require("../assets/photograph1.png")}  */
                />
            </View>
            <Text style={[styles.off, styles.textTypo]}>35% OFF</Text>
            <View style={[styles.sideNavigationItem, styles.storeItem1ChildBg]}>
                <Text style={[styles.home, styles.homePosition]}>Home</Text>
                <Image
                    style={[styles.homeIcon, styles.homePosition]}
                    contentFit="cover"
                    source={require("../assets/home.png")}
                />
                <Image
                    style={styles.chevronRightIcon}
                    contentFit="cover"
                    source={require("../assets/chevronright.png")}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
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
        width: 339,
        borderRadius: Border.br_base,
        position: "absolute",
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
        top: 288,
        flexDirection: "row",
        left: 24,
        position: "absolute",
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
        height: 314,
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
});

export default HomePageUsuario;

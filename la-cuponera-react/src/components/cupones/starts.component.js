import React from "react";
import { View, Text, TouchableOpacity, Modal } from "react-native";
import ConfirmacinDeCompraAndroi from "./modal.cupones.component";
import { styles } from "../../styles/stylesCuponesLista";
import { Image } from "expo-image";

export default function Starts() {
    return (
        <View>
            <View style={styles.starParent}>
                <Image
                    style={styles.starIconLayout}
                    contentFit="cover"
                    source={require("../../assets/star1.png")}
                />
                <Image
                    style={[styles.starIcon1, styles.starIconLayout]}
                    contentFit="cover"
                    source={require("../../assets/star1.png")}
                />
                <Image
                    style={[styles.starIcon1, styles.starIconLayout]}
                    contentFit="cover"
                    source={require("../../assets/star2.png")}
                />
                <Image
                    style={[styles.starIcon1, styles.starIconLayout]}
                    contentFit="cover"
                    source={require("../../assets/star2.png")}
                />
                <Image
                    style={[styles.starIcon1, styles.starIconLayout]}
                    contentFit="cover"
                    source={require("../../assets/star2.png")}
                />
            </View>
        </View>
    );
}

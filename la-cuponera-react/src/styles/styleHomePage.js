import { StyleSheet } from 'react-native';

/* fonts */
export const FontFamily = {
    interMedium: "Inter-Medium",
    interBold: "Inter-Bold",
};
/* font sizes */
export const FontSize = {
    size_sm: 14,
    size_base: 16,
};
/* Colors */
export const Color = {
    colorDimgray_100: "#544c4c",
    colorDimgray_200: "rgba(84, 76, 76, 0.14)",
    colorBlack: "#000",
};
/* border radiuses */
export const Border = {
    br_7xs: 6,
};



export const styles = StyleSheet.create({
    iphone143Position: {
      overflow: "hidden",
      position: "absolute",
    },
    nameTypo: {
      textAlign: "left",
      fontFamily: FontFamily.interBold,
      fontWeight: "700",
      color: Color.colorBlack,
      position: "absolute",
    },
    parentLayout: {
      height: 69,
      width: 342,
      left: 24,
      position: "absolute",
    },
    groupChildLayout: {
      height: 44,
      width: 342,
      left: 0,
      position: "absolute",
    },
    textTypo: {
      fontFamily: FontFamily.interMedium,
      fontWeight: "500",
      lineHeight: 14,
      fontSize: FontSize.size_sm,
      left: 15,
      marginTop: -6,
      top: "50%",
      textAlign: "left",
      position: "absolute",
    },
    materialSymbolsarrowBackIoIcon: {
      left: 25,
      width: 30,
      height: 30,
      top: 32,
      overflow: "hidden",
      position: "absolute",
    },
    profile1: {
      marginLeft: -53,
      fontSize: 20,
      lineHeight: 18,
      left: "50%",
      fontFamily: FontFamily.interBold,
      fontWeight: "700",
      top: 32,
    },
    iphone143Child: {
      marginTop: -314,
      marginLeft: -86,
      width: 171,
      height: 176,
      top: "50%",
      left: "50%",
      position: "absolute",
    },
    name: {
      fontSize: FontSize.size_base,
      lineHeight: 16,
      left: 0,
      top: 0,
    },
    groupChild: {
      borderRadius: Border.br_7xs,
      borderStyle: "solid",
      borderColor: Color.colorDimgray_200,
      borderWidth: 1,
      top: 0,
      height: 44,
    },
    melissaPeters: {
      color: Color.colorDimgray_100,
    },
    rectangleParent: {
      top: 25,
    },
    nameParent: {
      top: 308,
    },
    emailParent: {
      top: 395,
    },
    text: {
      color: Color.colorBlack,
      fontWeight: "500",
      lineHeight: 12,
      fontSize: FontSize.size_sm,
      left: 15,
      marginTop: -6,
    },
    passwordParent: {
      top: 482,
    },
    materialSymbolsarrowBackIoIcon1: {
      top: 8,
      left: 302,
      width: 20,
      height: 20,
    },
    dateOfBirthParent: {
      top: 569,
    },
    countryregionParent: {
      top: 656,
    },
    iphone143: {
      backgroundColor: "#fff",
      width: 390,
      height: 844,
      left: 0,
      top: 0,
    },
    profile: {
      top:-100,
      flex: 1,
      width: "100%",
      height: 820,
    },
  });
  
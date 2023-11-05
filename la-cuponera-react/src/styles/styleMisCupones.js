/* fonts */
export const FontFamily = {
  largeDefaultBody: "Roboto-Regular",
  iOSSizeLargeDefaultFootnote: "SF Pro Text",
  defaultSizeTitle3Strong: "Helvetica Neue",
  bodyHeavy: "Inter-SemiBold",
  buttonRobotoMedium: "Roboto-Medium",
};
/* font sizes */
export const FontSize = {
  largeDefaultBody_size: 17,
  iOSSizeLargeDefaultFootnote_size: 13,
  defaultSizeSubheadline_size: 15,
  defaultSizeTitle3Strong_size: 20,
  bodyHeavy_size: 16,
  buttonRobotoMedium_size: 14,
};
/* Colors */
export const Color = {
  systemBackgroundsSBLPrimary: "#fff",
  primary: "#545f71",
  labelColorsLCLSecondary: "rgba(60, 60, 67, 0.6)",
  labelColorsLCLTertiary: "rgba(60, 60, 67, 0.3)",
  systemColorsSCLIndigo: "#5856d6",
  userAccentColorUACLight: "#0a7aff",
  colorWhitesmoke_100: "#f7f7f7",
  tertiary: "#eef1f4",
  labelColorsLCLPrimary: "#000",
};
/* Paddings */
export const Padding = {
  p_5xs: 8,
  p_base: 16,
  p_smi: 13,
  p_3xs: 10,
  p_6xs: 7,
  p_xs: 12,
  p_2xs: 11,
  p_9xs: 4,
  p_8xs: 5,
  p_10xs: 3,
};
import { StyleSheet } from 'react-native';

/* border radiuses */
export const Border = {
  br_11xs: 2,
  br_xs: 12,
  br_base: 16,
  br_xl: 20,
  br_5xs: 8,
};

export const styles2 = StyleSheet.create({
  homeIconLayout: {
    height: 24,
    width: 24,
  },
  textSpaceBlock: {
    paddingTop: Padding.p_6xs,
    alignSelf: "stretch",
  },
  text3Typo: {
    fontFamily: FontFamily.iOSSizeLargeDefaultFootnote,
    letterSpacing: 0,
  },
  actionFlexBox: {
    paddingVertical: Padding.p_6xs,
    paddingHorizontal: Padding.p_3xs,
    backgroundColor: Color.userAccentColorUACLight,
    borderRadius: Border.br_base,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  actionsFlexBox: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  iconplaceholderLayout: {
    backgroundColor: Color.labelColorsLCLTertiary,
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  textTypo: {
    color: Color.systemBackgroundsSBLPrimary,
    fontSize: FontSize.largeDefaultBody_size,
    fontFamily: FontFamily.largeDefaultBody,
    letterSpacing: 1,
    marginLeft: 8,
    display: "none",
    lineHeight: 22,
  },
  textCTypo: {
    textAlign: "center",
    color: Color.systemBackgroundsSBLPrimary,
    fontSize: FontSize.largeDefaultBody_size,
    marginLeft: 8,
    lineHeight: 22,
  },
  home: {
    marginTop: -10,
    left: 64,
    fontSize: FontSize.bodyHeavy_size,
    letterSpacing: -0.3,
    fontWeight: "600",
    fontFamily: FontFamily.bodyHeavy,
    color: Color.primary,
    textAlign: "left",
    lineHeight: 22,
    top: "50%",
    position: "absolute",
  },
  homeIcon: {
    marginTop: -12,
    left: 16,
    top: "50%",
    height: 24,
    width: 24,
    position: "absolute",
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
    top: 0,
    left: 0,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.tertiary,
    width: 390,
    height: 52,
    position: "absolute",
    overflow: "hidden",
  },
  aspectRatioKeeperRotated: {
    transform: [
      {
        rotate: "-41.81deg",
      },
    ],
    alignItems: "center",
    alignSelf: "stretch",
  },
  imageIcon: {
    alignSelf: "stretch",
    overflow: "hidden",
  },
  content1: {
    width: 40,
    height: 40,
    overflow: "hidden",
  },
  imageplaceholderIcon: {
    borderRadius: Border.br_xl,
    overflow: "hidden",
  },
  image: {
    paddingTop: Padding.p_3xs,
    display: "none",
    flexDirection: "row",
  },
  text1: {
    fontSize: FontSize.defaultSizeTitle3Strong_size,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: FontFamily.defaultSizeTitle3Strong,
    color: Color.labelColorsLCLPrimary,
    letterSpacing: 0,
    textAlign: "left",
    flex: 1,
  },
  text: {
    flexDirection: "row",
  },
  text3: {
    fontSize: FontSize.defaultSizeSubheadline_size,
    lineHeight: 20,
    color: Color.labelColorsLCLSecondary,
    textAlign: "left",
    flex: 1,
  },
  text2: {
    paddingTop: Padding.p_9xs,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  textitem: {
    marginLeft: 16,
    flex: 1,
  },
  content: {
    flexDirection: "row",
    flex: 1,
  },
  iconplaceholder: {
    overflow: "hidden",
  },
  icons: {
    paddingTop: Padding.p_smi,
    marginLeft: 8,
    display: "none",
  },
  cardheader: {
    paddingVertical: Padding.p_2xs,
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  text4: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  textitem1: {
    alignSelf: "stretch",
  },
  content3: {
    paddingBottom: Padding.p_xs,
    display: "none",
    paddingHorizontal: Padding.p_base,
    overflow: "hidden",
  },
  action1: {
    fontSize: FontSize.iOSSizeLargeDefaultFootnote_size,
    lineHeight: 18,
    color: Color.colorWhitesmoke_100,
    textAlign: "left",
  },
  action2: {
    marginLeft: 8,
    display: "none",
  },
  iconplaceholder1: {
    display: "none",
  },
  cupertinoActivityIndicator1Icon: {
    height: "66.67%",
    width: "66.67%",
    top: "16.67%",
    right: "16.67%",
    bottom: "16.67%",
    left: "16.67%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  loadingindicator: {
    marginLeft: 8,
    display: "none",
  },
  text6: {
    textAlign: "left",
  },
  loading: {
    fontFamily: FontFamily.iOSSizeLargeDefaultFootnote,
    letterSpacing: 0,
    display: "none",
  },
  textC: {
    fontFamily: FontFamily.largeDefaultBody,
    letterSpacing: 1,
    textAlign: "center",
  },
  text7: {
    textAlign: "right",
  },
  iconplaceholder2: {
    marginLeft: 8,
    display: "none",
  },
  content4: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.systemColorsSCLIndigo,
    height: 36,
    paddingVertical: Padding.p_smi,
    paddingHorizontal: Padding.p_base,
  },
  structure: {
    borderRadius: Border.br_11xs,
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  statesShadowBox: {
    shadowOpacity: 1,
    elevation: 0.5,
    shadowRadius: 0.5,
    shadowOffset: {
      width: 0,
      height: 0.30000001192092896,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    flexDirection: "row",
  },
  buttonMaterialDesign: {
    flexDirection: "row",
  },
  buttonMaterialDesign1: {
    marginLeft: 8,
    flexDirection: "row",
  },
  buttonMaterialDesign3: {
    marginLeft: 8,
    display: "none",
    flexDirection: "row",
  },
  buttons: {
    display: "none",
    flexDirection: "row",
  },
  actionsarea: {
    justifyContent: "space-between",
    paddingLeft: Padding.p_5xs,
    paddingTop: Padding.p_5xs,
    paddingRight: Padding.p_base,
    paddingBottom: Padding.p_5xs,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
  },
  cardpattern: {
    borderStyle: "solid",
    borderColor: "#544c4c",
    borderWidth: 1,
    alignSelf: "stretch",
  },
  cardsHumanInterfaceGuidel: {
    top: 85,
    left: 38,
    width: 297,
    height: 185,
    position: "absolute",
    backgroundColor: Color.systemBackgroundsSBLPrimary,
  },
  miscupones: {
    width: "100%",
    height: 816,
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.systemBackgroundsSBLPrimary,
  },
});


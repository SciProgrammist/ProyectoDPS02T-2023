import { StyleSheet } from "react-native";
import { Color, FontFamily, FontSize, Border, Padding } from "./GlobalStyles";

export const styles = StyleSheet.create({
  itemTitlePosition: {
    top: 0,
    left: 0,
  },
  crearTypo: {
    color: Color.colorGray_100,
    fontFamily: FontFamily.body3Bold,
    fontWeight: "600",
    textAlign: "left",
    fontSize: FontSize.captionBold_size,
    position: "absolute",
  },
  row3IconLayout: {
    width: 375,
    position: "absolute",
  },
  screenTitlePosition: {
    left: "50%",
    position: "absolute",
  },
  topLayout: {
    height: 40,
    width: 40,
    borderRadius: Border.br_93xl,
    marginTop: -20,
    top: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  modalShadowBox: {
    padding: Padding.p_5xl,
    width: 327,
    shadowColor: "rgba(31, 47, 70, 0.12)",
    borderRadius: Border.br_5xl,
    justifyContent: "center",
    shadowOpacity: 1,
    elevation: 64,
    shadowRadius: 64,
    shadowOffset: {
      width: 0,
      height: 64,
    },
    backgroundColor: Color.neutrals8,
    left: "50%",
    top: "50%",
    alignItems: "center",
    position: "absolute",
    overflow: "hidden",
  },
  yourBidTypo: {
    lineHeight: 32,
    fontSize: FontSize.body1Bold_size,
    color: Color.neutrals2,
    fontFamily: FontFamily.body3Bold,
    fontWeight: "600",
  },
  shareSpaceBlock: {
    padding: Padding.p_5xs,
    justifyContent: "center",
  },
  youSpaceBlock: {
    marginTop: 150,
    alignSelf: "stretch",
    textAlign: "justify",
  },
  youSpaceBlockt1: {
    marginTop: 100,
    alignSelf: "stretch",
    textAlign: "justify",
  },
  youSpaceBlockt: {
    marginTop: 15,
    alignSelf: "stretch",
    textAlign: "justify",
  },
  youSpaceBlockb: {
    marginTop: 25,
    alignSelf: "stretch",
    textAlign: "justify",
  },
  enterBidTypo: {
    color: Color.neutrals4,
    lineHeight: 24,
    fontSize: FontSize.body2Bold_size,
    textAlign: "left",
  },
  ethTypo: {
    textAlign: "right",
    lineHeight: 24,
    color: Color.neutrals2,
    fontSize: FontSize.body2Bold_size,
  },
  dividerSpaceBlock: {
    marginTop: 16,
    alignSelf: "stretch",
  },
  dividerSpaceBlockb: {
    marginTop: 13,
    alignSelf: "stretch",
  },
  buttonSpaceBlock: {
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_5xl,
    borderRadius: Border.br_71xl,
    justifyContent: "center",
    alignItems: "center",
  },
  labelTypo: {
    fontFamily: FontFamily.headline4,
    fontWeight: "700",
    lineHeight: 16,
    textAlign: "center",
    fontSize: FontSize.body2Bold_size,
  },
  button1SpaceBlock: {
    marginTop: 8,
    flexDirection: "row",
  },
  productLayout: {
    height: 812,
    width: 375,
  },
  blurIconPosition: {
    opacity: 0.5,
    left: 8,
    position: "absolute",
  },
  closeModalShadowBox: {
    elevation: 16,
    shadowRadius: 16,
    borderRadius: Border.br_29xl,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 64,
    },
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  shareLayout: {
    borderRadius: Border.br_29xl,
    overflow: "hidden",
  },
  earningTypo1: {
    color: Color.neutrals3,
    lineHeight: 20,
    fontSize: FontSize.caption2_size,
    textAlign: "center",
    fontFamily: FontFamily.body3Bold,
    fontWeight: "600",
  },
  row3IconSpaceBlock: {
    padding: Padding.p_base,
    alignItems: "center",
    overflow: "hidden",
  },
  iconsmorelineLayout: {
    height: 20,
    width: 20,
  },
  cOITypo: {
    fontFamily: FontFamily.body2Bold,
    fontWeight: "500",
  },
  earningTypo: {
    fontSize: FontSize.body3Bold_size,
    lineHeight: 24,
    color: Color.neutrals2,
    fontFamily: FontFamily.body3Bold,
    fontWeight: "600",
  },
  confirmacinDeCompraAndroiChild: {
    backgroundColor: Color.colorGainsboro_100,
    width: 360,
    left: 0,
    position: "absolute",
    height: 800,
  },
  iniciarSesinCon: {
    top: 681,
    left: 90,
    textAlign: "left",
  },
  crear: {
    top: 521,
    left: 155,
    textAlign: "left",
  },
  checkCircleIcon: {
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  title: {
    fontFamily: FontFamily.body,
    marginLeft: 12,
    color: Color.primary,
    lineHeight: 22,
    letterSpacing: -0.3,
    fontSize: FontSize.body2Bold_size,
    textAlign: "left",
  },
  alert: {
    top: 108,
    left: 53,
    borderRadius: Border.br_7xs,
    backgroundColor: Color.tertiary,
    height: 45,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_xs,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  screenTitle: {
    marginTop: -11,
    marginLeft: -76.5,
    fontFamily: FontFamily.bodyHeavy,
    textAlign: "center",
    top: "50%",
    left: "50%",
    color: Color.primary,
    lineHeight: 22,
    letterSpacing: -0.3,
    fontSize: FontSize.body2Bold_size,
    fontWeight: "600",
  },
  topNavigationBarChild: {
    left: 16,
  },
  topNavigationBarItem: {
    right: 16,
  },
  topNavigationBar: {
    top: 36,
    left: -12,
    height: 72,
    overflow: "hidden",
    backgroundColor: Color.white,
    width: 375,
  },
  folowSteps: {
    color: Color.neutrals2,
    textAlign: "left",
    flex: 1,
    marginTop: 1,
  },
  share: {
    borderWidth: 2,
    padding: Padding.p_5xs,
    borderStyle: "solid",
    borderColor: Color.neutrals6,
    borderRadius: Border.br_29xl,
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
    marginTop: 1,
  },
  modalTitle: {
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
  },
  youAreAbout: {
    fontFamily: FontFamily.body2,
  },
  youAreAboutContainer: {
    lineHeight: 24,
    textAlign: "left",
    color: Color.neutrals2,
    fontSize: FontSize.body2Bold_size,
    marginTop: 32,
  },
  yourBid: {
    color: Color.neutrals2,
    textAlign: "left",
  },
  yourBidWrapper: {
    width: 384,
    alignItems: "center",
    flexDirection: "row",
  },
  enterBid: {
    fontFamily: FontFamily.body2Bold,
    fontWeight: "500",
  },
  eth1: {
    fontFamily: FontFamily.body2Bold,
    fontWeight: "500",
  },
  eth: {
    justifyContent: "space-between",
    alignSelf: "stretch",
    flexDirection: "row",
  },
  divider: {
    backgroundColor: Color.neutrals6,
    height: 1,
    overflow: "hidden",
  },
  yourBalance: {
    fontFamily: FontFamily.body2,
  },
  balance: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  amountsSpaceBlock: {
    marginTop: 16,
    alignSelf: "stretch",
  },
  label: {
    color: Color.neutrals8,
  },
  button: {
    backgroundColor: Color.primary1,
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_5xl,
    borderRadius: Border.br_71xl,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  label1: {
    color: Color.neutrals2,
  },
  button1: {
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_5xl,
    borderRadius: Border.br_71xl,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: Color.neutrals6,
    borderStyle: "solid",
    alignSelf: "stretch",
  },
  modal: {
    marginTop: -292,
    marginLeft: -156,
  },
  blurGradientIcon: {
    top: 202,
    height: 604,
    width: 360,
  },
  closeModal: {
    top: 24,
    right: 24,
    shadowColor: "rgba(15, 15, 15, 0.2)",
    borderColor: Color.colorWhitesmoke_100,
    padding: Padding.p_5xs,
    justifyContent: "center",
    borderWidth: 2,
    borderStyle: "solid",
    backgroundColor: Color.neutrals8,
    position: "absolute",
  },
  spaceShipping: {
    color: Color.neutrals2,
    textAlign: "center",
  },
  avatarIcon: {
    width: 19,
    height: 19,
  },
  earning: {
    marginLeft: 8,
  },
  title1: {
    top: 40,
    right: 64,
    left: 24,
    position: "absolute",
  },
  itemTitle: {
    height: 100,
    left: 0,
    top: 0,
  },
  iconsfullScreenline: {
    overflow: "hidden",
  },
  share1: {
    borderRadius: Border.br_29xl,
    overflow: "hidden",
    backgroundColor: Color.neutrals8,
    alignItems: "center",
    flexDirection: "row",
  },
  earning1: {
    marginLeft: 4,
  },
  love: {
    shadowColor: "rgba(15, 15, 15, 0.1)",
    marginLeft: 8,
    borderRadius: Border.br_29xl,
    overflow: "hidden",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 64,
    },
    backgroundColor: Color.neutrals8,
    elevation: 64,
    shadowRadius: 64,
    padding: Padding.p_5xs,
    alignItems: "center",
    flexDirection: "row",
  },
  share3: {
    marginLeft: 8,
    borderRadius: Border.br_29xl,
    overflow: "hidden",
    backgroundColor: Color.neutrals8,
    alignItems: "center",
    flexDirection: "row",
  },
  shareGroup: {
    flexDirection: "row",
  },
  shareParent: {
    alignItems: "flex-end",
    justifyContent: "space-between",
    alignSelf: "stretch",
    flexDirection: "row",
  },
  dDesign: {
    color: Color.neutrals8,
    lineHeight: 24,
    textAlign: "left",
    fontSize: FontSize.captionBold_size,
    fontWeight: "500",
  },
  dropdowndarkdefault: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    width: 128,
    paddingLeft: Padding.p_xl,
    paddingTop: Padding.p_base,
    paddingRight: Padding.p_base,
    paddingBottom: Padding.p_base,
    backgroundColor: Color.glassDark,
    justifyContent: "space-between",
  },
  earning2: {
    lineHeight: 20,
    fontSize: FontSize.caption2_size,
    color: Color.neutrals4,
    fontFamily: FontFamily.body2,
    textAlign: "center",
  },
  earning3: {
    textAlign: "left",
  },
  earningWrapper: {
    alignItems: "center",
    flexDirection: "row",
  },
  price: {
    width: 176,
    justifyContent: "center",
  },
  earning5: {
    textAlign: "center",
  },
  priceGroup: {
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
  },
  price1: {
    width: 80,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  avatarIcon1: {
    width: 48,
    height: 48,
    marginLeft: 16,
  },
  button2: {
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_5xl,
    borderRadius: Border.br_71xl,
    borderWidth: 2,
    borderColor: Color.neutrals6,
    borderStyle: "solid",
    flexDirection: "row",
    flex: 1,
  },
  button3: {
    marginLeft: 8,
    backgroundColor: Color.primary1,
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_5xl,
    borderRadius: Border.br_71xl,
    flexDirection: "row",
    flex: 1,
  },
  buttonParent: {
    flexDirection: "row",
  },
  titleAndPrice: {
    borderRadius: Border.br_base,
    shadowColor: "rgba(15, 15, 15, 0.12)",
    shadowRadius: 32,
    elevation: 32,
    marginTop: 16,
    alignSelf: "stretch",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 64,
    },
    backgroundColor: Color.neutrals8,
    padding: Padding.p_base,
  },
  stickyPurchaseAndMenu: {
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
  },
  row3Icon: {
    top: 124,
    borderTopLeftRadius: Border.br_5xl,
    borderTopRightRadius: Border.br_5xl,
    height: 688,
    justifyContent: "space-between",
    width: 375,
    position: "absolute",
    left: 0,
  },
  productDetail1: {
    borderRadius: Border.br_13xl,
    height: 812,
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.neutrals8,
    left: 0,
    top: 0,
  },
  blurBackground: {
    backgroundColor: Color.colorGray_200,
    left: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  blurGradientIcon1: {
    top: 6,
    height: 812,
    width: 375,
  },
  youAreAbout1: {
    fontFamily: FontFamily.body2,
    lineHeight: 24,
    //textAlign: "left",
    color: Color.neutrals2,
    fontSize: FontSize.body2Bold_size,
    //marginBottom: -30,
  },
  eth6: {
    fontFamily: FontFamily.body2,
  },
  modal1: {
    marginTop: -371,
    marginLeft: -163.5,
    height: 721,
  },
  frameChild: {
    borderRadius: 8,
    width: 294,
    height: 136,
  },
  productDetailInner: {
    top: 95,
    left: 29,
    width: 282,
    height: 131,
    padding: 10,
    position: "absolute",
  },
  productDetail: {
    top: -6,
    left: -8,
    borderRadius: Border.br_13xl,
    height: 812,
    position: "absolute",
    overflow: "hidden",
  },
  photographIcon: {
    marginTop: -80,
    top: 189,
    left: 80,
    width: 200,
    height: 90,
    overflow: "hidden",
  },
  confirmacinDeCompraAndroi: {
    borderColor: "#9ba5b7",
    borderWidth: 1,
    width: "100%",
    overflow: "hidden",
    height: 800,
    flex: 1,
    borderStyle: "solid",
    backgroundColor: Color.white,
  },
});

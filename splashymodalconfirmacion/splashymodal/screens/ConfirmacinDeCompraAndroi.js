import * as React from "react";
import { StyleSheet, View, Text, ImageBackground } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const ConfirmacinDeCompraAndroi = () => {
  return (
    <View style={styles.confirmacinDeCompraAndroi}>
      <View
        style={[
          styles.confirmacinDeCompraAndroiChild,
          styles.itemTitlePosition,
        ]}
      />
      <View
        style={[
          styles.confirmacinDeCompraAndroiChild,
          styles.itemTitlePosition,
        ]}
      />
      <Text style={[styles.iniciarSesinCon, styles.crearTypo]}>
        Iniciar sesión con Facebook
      </Text>
      <Text style={[styles.crear, styles.crearTypo]}>Crear</Text>
      <View style={styles.alert}>
        <Image
          style={styles.checkCircleIcon}
          contentFit="cover"
         
        />
        <Text style={styles.title}>cupon añadido a tu lista</Text>
      </View>
      <View style={[styles.topNavigationBar, styles.row3IconLayout]}>
        <Text style={[styles.screenTitle, styles.screenTitlePosition]}>
          Cupon seleccionado
        </Text>
        <Image
          style={[styles.topNavigationBarChild, styles.topLayout]}
          contentFit="cover"
         
        />
        <Image
          style={[styles.topNavigationBarItem, styles.topLayout]}
          contentFit="cover"
          
        />
      </View>
      <View style={[styles.modal, styles.modalShadowBox]}>
        <View style={styles.modalTitle}>
          <Text style={[styles.folowSteps, styles.yourBidTypo]}>
            Place a bid
          </Text>
          <View style={[styles.share, styles.shareSpaceBlock]}>
            <Image
              style={styles.checkCircleIcon}
              contentFit="cover"
             
            />
          </View>
        </View>
        <Text style={[styles.youAreAboutContainer, styles.youSpaceBlock]}>
          <Text
            style={styles.youAreAbout}
          >{`You are about to place a bit for `}</Text>
          <Text style={styles.cOITypo}>C O I N Z</Text>
          <Text style={styles.youAreAbout}>{` from `}</Text>
          <Text style={styles.cOITypo}>UI8</Text>
        </Text>
        <View style={styles.youSpaceBlock}>
          <View style={styles.yourBidWrapper}>
            <Text style={[styles.yourBid, styles.yourBidTypo]}>Your bid</Text>
          </View>
          <View style={styles.amountsSpaceBlock}>
            <View style={styles.eth}>
              <Text style={[styles.enterBid, styles.enterBidTypo]}>
                Enter bid
              </Text>
              <Text style={[styles.eth1, styles.ethTypo]}>ETH</Text>
            </View>
            <View style={[styles.divider, styles.dividerSpaceBlock]} />
            <View style={[styles.balance, styles.dividerSpaceBlock]}>
              <Text style={[styles.yourBalance, styles.enterBidTypo]}>
                Your balance
              </Text>
              <Text style={[styles.eth1, styles.ethTypo]}>8.498 ETH</Text>
            </View>
            <View style={[styles.balance, styles.dividerSpaceBlock]}>
              <Text style={[styles.yourBalance, styles.enterBidTypo]}>
                Service fee
              </Text>
              <Text style={[styles.eth1, styles.ethTypo]}>0 ETH</Text>
            </View>
            <View style={[styles.balance, styles.dividerSpaceBlock]}>
              <Text style={[styles.yourBalance, styles.enterBidTypo]}>
                Total bid amount
              </Text>
              <Text style={[styles.eth1, styles.ethTypo]}>0 ETH</Text>
            </View>
          </View>
        </View>
        <View style={styles.youSpaceBlock}>
          <View style={[styles.button, styles.buttonSpaceBlock]}>
            <Text style={[styles.label, styles.labelTypo]}>Place a bid</Text>
          </View>
          <View style={[styles.button1, styles.button1SpaceBlock]}>
            <Text style={[styles.label1, styles.labelTypo]}>Cancel</Text>
          </View>
        </View>
      </View>
      <View style={[styles.productDetail, styles.productLayout]}>
        <View style={[styles.productDetail1, styles.productLayout]}>
          <Image
            style={[styles.blurGradientIcon, styles.blurIconPosition]}
            contentFit="cover"
            source={require("../assets/blur-gradient1@3x.png")}
          />
          <View style={[styles.itemTitle, styles.row3IconLayout]}>
            <View style={[styles.closeModal, styles.closeModalShadowBox]}>
              <Image
                style={styles.checkCircleIcon}
                contentFit="cover"
               
              />
            </View>
            <View style={styles.title1}>
              <Text style={[styles.spaceShipping, styles.yourBidTypo]}>
                Space shipping
              </Text>
              <View style={styles.button1SpaceBlock}>
                <Image
                  style={[styles.avatarIcon, styles.shareLayout]}
                  contentFit="cover"
                 
                />
                <Text style={[styles.earning, styles.earningTypo1]}>
                  Tran Mau Tri Tam
                </Text>
              </View>
            </View>
          </View>
          <ImageBackground
            style={[styles.row3Icon, styles.row3IconSpaceBlock]}
            resizeMode="cover"
            
          >
            <View style={styles.shareParent}>
              <View style={[styles.share1, styles.shareSpaceBlock]}>
                <Image
                  style={[
                    styles.iconsfullScreenline,
                    styles.iconsmorelineLayout,
                  ]}
                  contentFit="cover"
               
                />
              </View>
              <View style={styles.shareGroup}>
                <View style={[styles.share1, styles.shareSpaceBlock]}>
                  <Image
                    style={[
                      styles.iconsfullScreenline,
                      styles.iconsmorelineLayout,
                    ]}
                    contentFit="cover"
                   
                  />
                </View>
                <View style={[styles.love, styles.shareSpaceBlock]}>
                  <Image
                    style={[
                      styles.iconsfullScreenline,
                      styles.iconsmorelineLayout,
                    ]}
                    contentFit="cover"
                   
                  />
                  <Text style={[styles.earning1, styles.earningTypo1]}>27</Text>
                </View>
                <View style={[styles.share3, styles.shareSpaceBlock]}>
                  <Image
                    style={styles.iconsmorelineLayout}
                    contentFit="cover"
                    
                  />
                </View>
              </View>
            </View>
            <View style={styles.stickyPurchaseAndMenu}>
              <LinearGradient
                style={[styles.dropdowndarkdefault, styles.closeModalShadowBox]}
                locations={[0, 1]}
                colors={["#141416", "rgba(20, 20, 22, 0.7)"]}
              >
                <Text style={[styles.dDesign, styles.cOITypo]}>Bids</Text>
                <Image
                  style={styles.checkCircleIcon}
                  contentFit="cover"
                
                />
              </LinearGradient>
              <View style={[styles.titleAndPrice, styles.row3IconSpaceBlock]}>
                <View style={styles.eth}>
                  <View style={styles.price}>
                    <Text style={styles.earning2}>Ending in</Text>
                    <View style={styles.earningWrapper}>
                      <Text style={[styles.earning3, styles.earningTypo]}>
                        8h 41m 2s
                      </Text>
                    </View>
                  </View>
                  <View style={styles.priceGroup}>
                    <View style={styles.price1}>
                      <Text style={styles.earning2}>{`Highest bid `}</Text>
                      <View style={styles.priceGroup}>
                        <Text style={[styles.earning5, styles.earningTypo]}>
                          4.10 ETH
                        </Text>
                      </View>
                    </View>
                    <Image
                      style={styles.avatarIcon1}
                      contentFit="cover"
                     
                    />
                  </View>
                </View>
                <View style={[styles.buttonParent, styles.dividerSpaceBlock]}>
                  <View style={[styles.button2, styles.buttonSpaceBlock]}>
                    <Text style={[styles.label1, styles.labelTypo]}>
                      Purchase
                    </Text>
                  </View>
                  <View style={[styles.button3, styles.buttonSpaceBlock]}>
                    <Text style={[styles.label, styles.labelTypo]}>
                      Place a bid
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </ImageBackground>
        </View>
        <View style={[styles.blurBackground, styles.productLayout]} />
        <Image
          style={[styles.blurGradientIcon1, styles.blurIconPosition]}
          contentFit="cover"
        
        />
        <View style={[styles.modal1, styles.modalShadowBox]}>
          <View style={styles.modalTitle}>
            <Text style={[styles.folowSteps, styles.yourBidTypo]}>
              Confirmar cupon
            </Text>
            <View style={[styles.share, styles.shareSpaceBlock]}>
              <Image
                style={styles.checkCircleIcon}
                contentFit="cover"
             
              />
            </View>
          </View>
          <Text
            style={[styles.youAreAbout1, styles.youSpaceBlock]}
          >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ornare, magna sit
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ornare, magna sit amet pulvinar euismod, odio nisl hendrerit magna, sit amet convallis lacus risus vitae tortor. `}</Text>
          <View style={styles.youSpaceBlock}>
            <View style={styles.yourBidWrapper}>
              <Text style={[styles.yourBid, styles.yourBidTypo]}>
                cupones selecciones
              </Text>
            </View>
            <View style={styles.amountsSpaceBlock}>
              <View style={styles.eth}>
                <Text style={[styles.enterBid, styles.enterBidTypo]}>
                  empresa
                </Text>
                <Text style={[styles.eth6, styles.ethTypo]}>
                  Lorem ipsum dolor sit
                </Text>
              </View>
              <View style={[styles.divider, styles.dividerSpaceBlock]} />
              <View style={[styles.balance, styles.dividerSpaceBlock]}>
                <Text style={[styles.yourBalance, styles.enterBidTypo]}>
                  cantidad
                </Text>
                <Text style={[styles.eth1, styles.ethTypo]}>{`1 `}</Text>
              </View>
              <View style={[styles.balance, styles.dividerSpaceBlock]}>
                <Text style={[styles.yourBalance, styles.enterBidTypo]}>
                  descuento
                </Text>
                <Text style={[styles.eth1, styles.ethTypo]}>30% OFF</Text>
              </View>
              <View style={[styles.balance, styles.dividerSpaceBlock]}>
                <Text style={[styles.yourBalance, styles.enterBidTypo]}>
                  fecha de compra
                </Text>
                <Text style={[styles.eth1, styles.ethTypo]}>DD/MM/YYYY</Text>
              </View>
            </View>
          </View>
          <View style={styles.youSpaceBlock}>
            <View style={[styles.button, styles.buttonSpaceBlock]}>
              <Text style={[styles.label, styles.labelTypo]}>Confirmar</Text>
            </View>
            <View style={[styles.button1, styles.button1SpaceBlock]}>
              <Text style={[styles.label1, styles.labelTypo]}>Cancelar</Text>
            </View>
          </View>
        </View>
        <View style={styles.productDetailInner}>
          <Image
            style={styles.frameChild}
            contentFit="cover"
           
          />
        </View>
      </View>
      <Image
        style={[styles.photographIcon, styles.screenTitlePosition]}
        contentFit="cover"
      
      />
    </View>
  );
};

const styles = StyleSheet.create({
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
    marginTop: 32,
    alignSelf: "stretch",
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
    marginTop: 12,
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
    width: 24,
    height: 24,
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
    textAlign: "left",
    color: Color.neutrals2,
    fontSize: FontSize.body2Bold_size,
    marginTop: 32,
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
    marginLeft: -20,
    top: 149,
    width: 32,
    height: 32,
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

export default ConfirmacinDeCompraAndroi;

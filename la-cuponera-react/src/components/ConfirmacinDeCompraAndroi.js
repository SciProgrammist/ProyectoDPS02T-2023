import * as React from "react";
import { View, Text, ImageBackground } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "../styles/stylesModalCupon";

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
                source={require("../img/gradient.png")}
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
                      <Text style={[styles.label, styles.youAreAbout1]}>
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
                Confirmar Cupón
              </Text>
              <View style={[styles.share, styles.shareSpaceBlock]}>
                <Image
                    style={styles.checkCircleIcon}
                    contentFit="cover"
                    source={require("../img/iconscloseline.png")}

                />
              </View>
            </View>



            <Text
                style={[styles.youAreAbout1, styles.youSpaceBlockt1]}
            >{`
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ornare, magna sit amet pulvinar euismod, odio nisl hendrerit magna, sit amet convallis lacus risus vitae tortor. `}</Text>
            <View style={styles.youSpaceBlockt}>
              <View style={styles.yourBidWrapper}>
                <Text style={[styles.yourBid, styles.yourBidTypo]}>
                  Cupones Seleccionados
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
                <View style={[styles.divider, styles.dividerSpaceBlockb]} />
                <View style={[styles.balance, styles.dividerSpaceBlockb]}>
                  <Text style={[styles.yourBalance, styles.enterBidTypo]}>
                    cantidad
                  </Text>
                  <Text style={[styles.eth1, styles.ethTypo]}>{`1 `}</Text>
                </View>
                <View style={[styles.balance, styles.dividerSpaceBlockb]}>
                  <Text style={[styles.yourBalance, styles.enterBidTypo]}>
                    descuento
                  </Text>
                  <Text style={[styles.eth1, styles.ethTypo]}>30% OFF</Text>
                </View>
                <View style={[styles.balance, styles.dividerSpaceBlockb]}>
                  <Text style={[styles.yourBalance, styles.enterBidTypo]}>
                    fecha de compra
                  </Text>
                  <Text style={[styles.eth1, styles.ethTypo]}>DD/MM/YYYY</Text>
                </View>
              </View>
            </View>
            <View style={styles.youSpaceBlockb}>
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
            style={[styles.photographIcon]}
            contentFit="cover"
            source={require("../img/photo.png")}

        />
      </View>
  );
};

export default ConfirmacinDeCompraAndroi;
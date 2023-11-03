import * as React from "react";
import { View, Text , TouchableOpacity} from "react-native";
import { Image } from "expo-image";
import { styles } from "../../styles/stylesModalCupon";

const ConfirmacinDeCompraAndroi = (props) => {
  const { cancelar } = props;

  return (
    <View style={styles.confirmacinDeCompraAndroi}>
      <View style={[styles.productDetail, styles.productLayout]}>
        <View style={[styles.modal1, styles.modalShadowBox]}>
          <View style={styles.modalTitle}>
            <Text style={[styles.folowSteps, styles.yourBidTypo]}>
              Confirmar Cupón
            </Text>
            <View style={[styles.share, styles.shareSpaceBlock]}>
              <Image
                style={styles.checkCircleIcon}
                contentFit="cover"
                source={require("../../img/iconscloseline.png")}
              />
            </View>
          </View>
          <Text
            style={[styles.youAreAbout1, styles.youSpaceBlockt1]}
          >
            {`
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
consectetur adipiscing elit. Aenean ornare, magna sit ame `}
</Text>
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
            <TouchableOpacity
                            
                            onPress={cancelar}>
                            <Text style={[styles.label1, styles.labelTypo]}>Cancelar</Text>
                        </TouchableOpacity>

            
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
        source={require("../../img/photo.png")}

      />
    </View>
  );
};

export default ConfirmacinDeCompraAndroi;
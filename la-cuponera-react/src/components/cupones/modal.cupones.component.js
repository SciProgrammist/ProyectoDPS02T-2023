import * as React from "react";
import { View, Text , TouchableOpacity} from "react-native";
import { Image } from "expo-image";
import { styles } from "../../styles/stylesModalCupon";

const ConfirmacinDeCompraAndroi = (props) => {
  const { cancelar } = props;
  const { cupon } = props;
  const { currentuser } = props;
  
  return (
    <View style={styles.confirmacinDeCompraAndroi}>
      <View style={[styles.productDetail, styles.productLayout]}>
        <View style={[styles.modal1, styles.modalShadowBox]}>
          <View style={{
            position:'absolute',
            top:-10,
            left:75,}}>
            <Text style={[styles.folowSteps, styles.yourBidTypo]}>
              Confirmar Cupón
            </Text>

          </View>
          <Image
        style={{top:-260,height:130,width:300}}
        contentFit="cover"
        source={require("../../img/photo.png")}
              />
<View style={{position:'absolute',top:60, width:300}}>
            <View style={{top:15}}>
          <Text
            style={[styles.youAreAbout1, styles.youSpaceBlockt1]}
          >
            {cupon.descripcion}
          </Text>
            </View>
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
                  {cupon.empresa}
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
                <Text style={[styles.eth1, styles.ethTypo]}>{cupon.descuento}% OFF</Text>
              </View>
              <View style={[styles.balance, styles.dividerSpaceBlockb]}>
                <Text style={[styles.yourBalance, styles.enterBidTypo]}>
                  valido hasta
                </Text>
                <Text style={[styles.eth1, styles.ethTypo]}>{cupon.fechavenc}</Text>
              </View>
            </View>
          </View>
          <View style={styles.youSpaceBlockb}>
            <TouchableOpacity  onPress={() => console.log(currentuser)} style={[styles.button, styles.buttonSpaceBlock]}>
              <Text style={[styles.label, styles.labelTypo]}>Confirmar</Text>
            </TouchableOpacity>
            <View>
                            <TouchableOpacity style={[styles.button1, styles.button1SpaceBlock]}onPress={cancelar}>
                            <Text style={[styles.label1, styles.labelTypo]}>Cancelar</Text>
                            </TouchableOpacity>

            
            </View>
          </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ConfirmacinDeCompraAndroi;
import React, { useState , useEffect} from "react";
import { View, Text, FlatList, TouchableOpacity, SafeAreaView, TextInput } from "react-native";
import { Image } from "expo-image";
import { styles } from "../../styles/stylesCuponesLista";
import ModalViewCupones from "./modal.view.component";
import Starts from "./starts.component";
import { database } from "../../utis/firebase";

const HomePageUsuario = () => {
    const [cupones, setcupones] = useState();
    const [cuponselect, setcuponselec] = useState();
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
		findAll();
	}, [modalVisible,  cupones])


    async function findAll() {

		database
			.ref('/cupones')
			.once('value')
			.then(snapshot => {
				setcupones(JSON.parse(JSON.stringify(snapshot.val()).replace("null,", '')))
			});

	}

    
    function canjearCupon(item) {
        console.log("STARTING PROCESS CANJEAR CUPON...");
        setcuponselec(item);
        setModalVisible(true);
    }
    function cancelar() {
        console.log("STARTING PROCESS CANJEAR CUPON...");
        setModalVisible(false);
    }
    return (
        <>
            <ModalViewCupones 
                    modalVisible={modalVisible}
                    setModalVisible={setModalVisible}
                    cancelar={cancelar}
                    cupon={cuponselect}
                    
                    
                />

            <View style={styles.homePageUsuario}>

                 
                <View style={styles.contenedor}>
               
                <FlatList data={cupones}
                ListHeaderComponent={() => 

                <View style={{height:100, top:-10}}>
                    
                <TextInput placeholder="Buscar cupones por empresa" style={styles.barrabuscar}/>
                    
                <View style={[styles.rectangleView, styles.rectangleViewPosition]} />
                <Text style={[styles.buscar, styles.buscarFlexBox]}>Buscar</Text>
                <Image
                    style={[styles.searchIcon, styles.starIconLayout]}
                    contentFit="cover"
                    source={require("../../assets/search.png")}
                />
                    </View>
                }
                        renderItem={({ item }) => (
                        
                            <TouchableOpacity style={{height:375}} onPress={() => canjearCupon(item)}>
                              
                                <View style={{height:400, width:375}}>
                                    <Text style={[styles.text, styles.textTypo]}>{item.descuento}% OFF</Text>
                                    <Text style={[styles.designLeadershipHow, styles.homeTypo]}>
                                    {item.descripcion}
                                        {item.titulo}
                                    </Text>
                                    <View style={[styles.storeItem1Child, styles.storeItem1ChildBg]} />
                                    <Starts />
                                    <Image
                                        style={styles.photographIcon}
                                        contentFit="cover"
                                        source={require("../../assets/photograph.png")}
                                    />
                                </View>
                               
                            </TouchableOpacity>

                            
                           
                            
                        )}
                    />
                    
                </View>
              
            </View>
        </>
    );
};

export default HomePageUsuario;

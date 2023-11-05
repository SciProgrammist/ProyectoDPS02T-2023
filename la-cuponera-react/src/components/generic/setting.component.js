
/*
 import { RefreshControlBase } from "react-native";
import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { styles } from "../../styles/styles";
import LoginComponent from "../login/logout.component";

export default function SettingPage(props) {
    const { signOut } = props;
    return (
        <View>
            <Text>Setting Page</Text>
            <View>
                <LoginComponent signOut={signOut} />
            </View>
        </View>
    );
}

*/

import * as React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import { Color, Border, FontFamily, FontSize, styles } from "../../styles/styleSettings"
const Frame = (props) => {
    const { signOut } = props;
    return (
        <View style={styles.iphone142Parent}>
            <View style={styles.iphone142}>
                <View style={[styles.rectangleParent, styles.groupChildPosition]}>
                    <View style={[styles.groupChild, styles.groupBg]} />
                    <View
                        style={[styles.icsharpOutlinedFlagParent, styles.parentPosition1]}
                    >
                        <Image
                            style={[styles.icsharpOutlinedFlagIcon, styles.iconLayout1]}
                            resizeMode="cover"
                            source={require("../../assets/icsharpoutlinedflag.png")}
                        />
                        <Text style={[styles.reportAProblem, styles.logOutFlexBox]}>
                            Report a problem
                        </Text>
                        <Text style={[styles.addAccount, styles.logOutFlexBox]}>
                            Add account
                        </Text>
                        <TouchableOpacity onPress={signOut}>
                            <Text style={[styles.logOut, styles.logOutFlexBox]}>Log out</Text>
                            <Image
                                style={[styles.mdilogoutIcon, styles.iconLayout1]}
                                resizeMode="cover"
                                source={require("../../assets/mdilogout.png")}
                            />
                        </TouchableOpacity>

                        <Image
                            style={[styles.icsharpPeopleOutlineIcon, styles.iconLayout1]}
                            resizeMode="cover"
                            source={require("../../assets/icsharppeopleoutline.png")}
                        />
                    </View>
                </View>
                <View style={[styles.rectangleContainer, styles.groupInnerPosition]}>
                    <View style={[styles.groupInner, styles.groupInnerPosition]} />
                    <View style={[styles.mySubscribtionParent, styles.parentPosition]}>
                        <Text style={[styles.reportAProblem, styles.logOutFlexBox]}>
                            My Subscribtion
                        </Text>
                        <Text
                            style={[styles.addAccount, styles.logOutFlexBox]}
                        >{`Help & Support`}</Text>
                        <Text style={[styles.logOut, styles.logOutFlexBox]}>
                            Terms and Policies
                        </Text>
                        <Image
                            style={[styles.mdilogoutIcon, styles.iconLayout1]}
                            resizeMode="cover"
                            source={require("../../assets/tablercircleletteri.png")}
                        />
                        <Image
                            style={[styles.icsharpPeopleOutlineIcon, styles.iconLayout1]}
                            resizeMode="cover"
                            source={require("../../assets/mdiquestionmarkcircleoutline.png")}
                        />
                        <Image
                            style={[
                                styles.materialSymbolscreditCardOIcon,
                                styles.iconLayout1,
                            ]}
                            resizeMode="cover"
                            source={require("../../assets/materialsymbolscreditcardoutline.png")}
                        />
                    </View>
                </View>
                <View style={[styles.groupView, styles.viewPosition]}>
                    <View style={[styles.rectangleView, styles.viewPosition]} />
                    <View style={[styles.editProfileParent, styles.parentPosition]}>
                        <Text style={[styles.reportAProblem, styles.logOutFlexBox]}>
                            Edit profile
                        </Text>
                        <Text style={[styles.addAccount, styles.logOutFlexBox]}>
                            security
                        </Text>
                        <Text style={[styles.logOut, styles.logOutFlexBox]}>
                            Notifications
                        </Text>
                        <Text style={[styles.privacy, styles.logOutFlexBox]}>Privacy</Text>
                        <Image
                            style={[styles.icoutlineLockIcon, styles.iconLayout1]}
                            resizeMode="cover"
                            source={require("../../assets/icoutlinelock.png")}
                        />
                        <Image
                            style={[styles.mdilogoutIcon, styles.iconLayout1]}
                            resizeMode="cover"
                            source={require("../../assets/iconamoonnotification.png")}
                        />
                        <Image
                            style={[styles.icsharpPeopleOutlineIcon, styles.iconLayout1]}
                            resizeMode="cover"
                            source={require("../../assets/materialsymbolsprivacytipoutline.png")}
                        />
                        <Image
                            style={[styles.icsharpOutlinedFlagIcon, styles.iconLayout1]}
                            resizeMode="cover"
                            source={require("../../assets/iconamoonprofilelight.png")}
                        />
                    </View>
                </View>
                <Text style={[styles.actions, styles.actionsTypo]}>Actions</Text>

                <Text
                    style={[styles.supportAbout, styles.actionsTypo]}
                >Support & About</Text>
                <Text style={[styles.account, styles.actionsTypo]}>Account</Text>

            </View>
        </View>
    );
};

export default Frame;
import React from "react";
import { Text, View, TouchableOpacity, ScrollView, StyleSheet, Image } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Antdesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function Updates() {
    return (
        <View>
            <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 25}}>
                <Text style={{ fontSize: 23, marginTop: 5, color: "black" }}>Updates</Text>
                <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 9 }}>
                    <MaterialIcons name='qr-code-scanner' size={23} style={{ marginRight: 15 }} />
                    <Antdesign name="camerao" size={23} style={{ marginRight: 15 }} />
                    <EvilIcons name="search" size={23} style={{ marginRight: 15 }} />
                    <TouchableOpacity>
                        <Entypo name="dots-three-vertical" size={23} />
                    </TouchableOpacity>
                </View>
            </View>
            <View>
                <Text style={{ fontSize: 25, marginBottom: 20, color: "black", }}>Status</Text>
                <TouchableOpacity style={{ flexDirection: "row", marginBottom: 10 }}>
                    <Image source={require('../assets/images/Dummy.png')} style={style.circle} />
                    <Icon name="plus" size={20} color="green" style={{ marginTop: 65, marginRight: 2, }} />
                    <View>
                        <Text style={{ marginLeft: 5, marginTop: 12, fontFamily: 'bold', fontSize: 18 }}>My status </Text>
                        <Text>  Tap to add status update</Text>
                    </View>
                </TouchableOpacity>
                <Text></Text>
            </View>
            <View style={{ width: 130, height: 180, backgroundColor: 'white', borderWidth: 1,marginLeft: 18,borderRadius: 22 }}>
                <TouchableOpacity>
                    <Image source={require('../assets/images/Profile1.jpg')} style={style.circle1} />
                    <Text style={{ fontSize: 18, marginBottom: 10, marginLeft: 18, }}> Rakkshit </Text>
                    <Text style={{ fontSize: 18, backgroundColor: "green", color: "white", borderWidth: 2, borderRadius: 22, width: 70, marginLeft: 20, }}> Follow </Text>
                </TouchableOpacity>
            </View>
            <ScrollView>
                <View>
                    <Text style={{ fontSize: 20, marginLeft: 5, marginBottom: 10 }}>Recent Updates</Text>
                </View>




                <TouchableOpacity style={{ flexDirection: "row", marginBottom: 10, }}>
                    <Image source={require('../assets/images/Profile1.jpg')} style={style.circle} />
                    <Text style={{ marginLeft: 9, marginTop: 12, fontFamily: 'bold', fontSize: 15 }}>Pris</Text>
                    <Text></Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: "row", marginBottom: 10 }}>
                    <Image source={require('../assets/images/Profile1.jpg')} style={style.circle} />
                    <Text style={{ marginLeft: 9, marginTop: 12, fontFamily: 'bold', fontSize: 15 }}>Pris</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: "row", marginBottom: 10 }}>
                    <Image source={require('../assets/images/Profile1.jpg')} style={style.circle} />
                    <Text style={{ marginLeft: 9, marginTop: 12, fontFamily: 'bold', fontSize: 15 }}>Pris</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: "row", marginBottom: 10 }}>
                    <Image source={require('../assets/images/Profile1.jpg')} style={style.circle} />
                    <Text style={{ marginLeft: 9, marginTop: 12, fontFamily: 'bold', fontSize: 15 }}>Pris</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: "row", marginBottom: 10 }}>
                    <Image source={require('../assets/images/Profile1.jpg')} style={style.circle} />
                    <Text style={{ marginLeft: 9, marginTop: 12, fontFamily: 'bold', fontSize: 15 }}>Pris</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: "row", marginBottom: 10 }}>
                    <Image source={require('../assets/images/Profile1.jpg')} style={style.circle} />
                    <Text style={{ marginLeft: 9, marginTop: 12, fontFamily: 'bold', fontSize: 15 }}>Pris</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: "row", marginBottom: 10 }}>
                    <Image source={require('../assets/images/Profile1.jpg')} style={style.circle} />
                    <Text style={{ marginLeft: 9, marginTop: 12, fontFamily: 'bold', fontSize: 15 }}>Pris</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: "row", marginBottom: 10 }}>
                    <Image source={require('../assets/images/Profile1.jpg')} style={style.circle} />
                    <Text style={{ marginLeft: 9, marginTop: 12, fontFamily: 'bold', fontSize: 15 }}>Pris</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: "row", marginBottom: 10 }}>
                    <Image source={require('../assets/images/Profile1.jpg')} style={style.circle} />
                    <Text style={{ marginLeft: 9, marginTop: 12, fontFamily: 'bold', fontSize: 15 }}>Pris</Text>
                </TouchableOpacity>
            </ScrollView>
            <View>
                <Text>Viewed updates</Text>
            </View>

            {/* <View style={style.circle}>
                <Icon name="plus" size={20} color="white" />
            </View> */}
            <View>
                <Text>Channels</Text>
                <Text> Stay updated on topics that matter to you. Find channels to folloe below. </Text>
                <ScrollView>
                    <View style={style.outerBox}>
                        <Text>Outer Box</Text>
                        <View style={style.innerBox}>
                            <Text>Inner Box</Text>
                        </View>
                    </View>
                    <View>
                        <TouchableOpacity>

                        </TouchableOpacity>
                    </View>
                </ScrollView>
                <TouchableOpacity style={{ borderRadius: 99, borderWidth: 2, backgroundColor: "green", height: 30, width: 95 }}>
                    <Text style={{ color: "white", marginLeft: 5 }}>Explore more</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const style = StyleSheet.create({
    box: {
        height: 110,
        widht: 20,
        borderRadius: 999,
        borderWidth: 3,
    },

    circle: {
        width: 80,
        height: 80,
        borderRadius: 50,
        backgroundColor: 'green',
        borderWidth: 9,
        marginLeft: 9,
    },
    circle1: {
        width: 80,
        height: 80,
        borderRadius: 50,
        backgroundColor: 'green',
        borderWidth: 9,
        marginLeft: 9,
        marginTop: 10,
    },
})
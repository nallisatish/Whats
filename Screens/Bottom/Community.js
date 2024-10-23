import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Antdesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/FontAwesome6';


export default function Community() {
    return (
        <View>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={{ color: "black", fontSize: 25, marginBottom: 10, marginLeft: 8 }}>Community</Text>
                <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 9 }}>
                    <MaterialIcons name='qr-code-scanner' size={20} style={{ marginRight: 15 }} />
                    <Antdesign name="camerao" size={20} style={{ marginRight: 15 }} />
                    <TouchableOpacity>
                        <Entypo name="dots-three-vertical" size={20} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{flexDirection:"row",}}>
                <Icon name="people-group" size={43} style={{marginLeft:15, marginTop:20,borderRadius:99, borderWidth:3, height:50,width:60, borderColor:"green"}}/>
                <Icon name="plus" size={20} color="green" style={{marginTop:40,}}/>
                <Text style={{marginTop:40,}}> New Community</Text>
            </View>
           
        </View>
    )
}
const style = StyleSheet.create({
    container: {
        width: 100,
        height: 100,
        borderWidth: 2,
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
    horizontalLine: {
        width: 60,
        height: 2,
        backgroundColor: 'black',
    },
    verticalLine: {
        width: 2,
        height: 60,
        backgroundColor: 'black',
        position: 'absolute',
    },
})
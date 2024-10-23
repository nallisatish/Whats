import React from 'react';
import { Text, View, TouchableOpacity, ScrollView, StyleSheet, FlatList, Image } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Antdesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

// const data = [
//     { id: '1', title: 'Image 1', url: 'https://example.com/image1.jpg' },
//     { id: '2', title: 'Image 2', url: 'https://example.com/image2.jpg' },
//     { id: '3', title: 'Image 3', url: 'https://example.com/image3.jpg' },
//     { id: '4', title: 'Image 4', url: 'https://example.com/image4.jpg' },
// ];

const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
        <Image source={{ uri: item.url }} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
    </View>
);
export default function Calls() {
    return (
        <View>
            <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 25 }}>
                <Text style={{ fontSize: 23, marginTop: 5, color: "black", marginLeft: 10 }}>Calls</Text>
                <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 9 }}>
                    <MaterialIcons name='qr-code-scanner' size={23} style={{ marginRight: 15 }} />
                    <Antdesign name="camerao" size={23} style={{ marginRight: 15 }} />
                    <TouchableOpacity>
                        <EvilIcons name="search" size={23} style={{ marginRight: 15 }} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Entypo name="dots-three-vertical" size={23} />
                    </TouchableOpacity>
                </View>
            </View>
            <View>
                <Text style={{ fontSize: 25, color:"black", marginLeft: 5 }}>Recent</Text>
            </View>
            <ScrollView>
                {/* <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    contentContainerStyle={styles.list}
                /> */}
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    list: {
        padding: 5,
    },
    itemContainer: {
        marginBottom: 20,
        alignItems: 'center',
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 10,
    },
    title: {
        marginTop: 10,
        fontSize: 16,
        fontWeight: 'bold',
    },
});
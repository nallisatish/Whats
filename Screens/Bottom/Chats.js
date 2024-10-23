import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Flatlist, Image, ScrollView, FlatList } from 'react-native';
import { Searchbar } from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Antdesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';


const message = [
    {
        id: "1",
        username: "john",
        userImg: require("../assets/images/P.jpg"),
        messageTime: "2 minutes ago",
        messageText: "Hi"
    },
    {
        id: "2",
        username: "Manas",
        userImg: require("../assets/images/Profile1.jpg"),
        messageTime: "5 minutes ago",
        messageText: "Hi  How are You!"
    },
    {
        id: "3",
        username: "Ishuu",
        userImg: require("../assets/images/Profile2.jpg"),
        messageTime: "3 minutes ago",
        messageText: "What doing"
    },
    {
        id: "4",
        username: "john",
        userImg: require("../assets/images/Profile3.jpg"),
        messageTime: "2 minutes ago",
        messageText: "Hi"
    },
    {
        id: "5",
        username: "john",
        userImg: require("../assets/images/Profile4.jpg"),
        messageTime: "2 minutes ago",
        messageText: "Hi"
    },
    {
        id: "6",
        username: "john",
        userImg: require("../assets/images/Profile5.jpg"),
        messageTime: "2 minutes ago",
        messageText: "Hi"
    },
    {
        id: "7",
        username: "john",
        userImg: require("../assets/images/Profile6.jpg"),
        messageTime: "2 minutes ago",
        messageText: "Hi"
    },
    {
        id: "8",
        username: "john",
        userImg: require("../assets/images/Profile7.jpg"),
        messageTime: "2 minutes ago",
        messageText: "Hi"
    },
];

const renderItem = ({ item }) => (
    <TouchableOpacity style={{ flexDirection: "row", marginBottom: 10 }}>
        <Image source={require('../assets/images/Profile2.jpg')} style={style.circle} />
        <Text style={{ marginLeft: 9, marginTop: 12, fontFamily: 'bold', fontSize: 15 }}>Paris</Text>
    </TouchableOpacity>
);


export default function Chats() {
    const [searchQuery, setSearchQuery] = useState('');
    return (
        <ScrollView>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={{ color: "green", fontSize: 25, marginBottom: 10, marginLeft: 8 }}>WhatsApp</Text>
                <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 9 }}>
                    <MaterialIcons name='qr-code-scanner' size={20} style={{ marginRight: 15 }} />
                    <TouchableOpacity>
                        <Antdesign name="camerao" size={20} style={{ marginRight: 15 }} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Entypo name="dots-three-vertical" size={20} />
                    </TouchableOpacity>
                </View>
            </View>
            <View>
                <Searchbar
                    placeholder="Search"
                    onChangeText={setSearchQuery}
                    value={searchQuery}
                    style={{ height: 40, width: 370, marginTop: 5, marginBottom: 15, marginRight: 20, marginLeft: 15, borderRadius: 10 }}

                />
            </View>
            <View style={{ flexDirection: "row", gap: 5, marginBottom: 10 }}>
                <TouchableOpacity style={style.select}>
                    <Text style={{ fontSize: 20, marginLeft: 15, }}>All</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.select}>
                    <Text style={style.text}>Unread</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.select}>
                    <Text style={style.text}>Favourite</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.select}>
                    <Text style={style.text}>Groups</Text>
                </TouchableOpacity>
            </View>
            {<ScrollView>

                <TouchableOpacity style={{ flexDirection: "row", marginBottom: 10 }}>
                    <Image source={require('../assets/images/Profile1.jpg')} style={style.circle} />
                    <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
                        <Text style={{ marginLeft: 10, color: "black", marginTop: 10, }}>Pris</Text>
                        <Text style={{ marginLeft: 210, color: "black", }}> 12:30</Text>

                    </View>
                    
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: "row", marginBottom: 10 }}>
                    <Image source={require('../assets/images/Profile2.jpg')} style={style.circle} />
                    <Text style={{ marginLeft: 9, marginTop: 12, fontFamily: 'bold', fontSize: 15 }}>Pris</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: "row", marginBottom: 10 }}>
                    <Image source={require('../assets/images/Profile3.jpg')} style={style.circle} />
                    <Text style={{ marginLeft: 9, marginTop: 12, fontFamily: 'bold', fontSize: 15 }}>Pris</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: "row", marginBottom: 10 }}>
                    <Image source={require('../assets/images/Profile4.jpg')} style={style.circle} />
                    <Text style={{ marginLeft: 9, marginTop: 12, fontFamily: 'bold', fontSize: 15 }}>Pris</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: "row", marginBottom: 10 }}>
                    <Image source={require('../assets/images/Profile5.jpg')} style={style.circle} />
                    <Text style={{ marginLeft: 9, marginTop: 12, fontFamily: 'bold', fontSize: 15 }}>Pris</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: "row", marginBottom: 10 }}>
                    <Image source={require('../assets/images/Profile6.jpg')} style={style.circle} />
                    <Text style={{ marginLeft: 9, marginTop: 12, fontFamily: 'bold', fontSize: 15 }}>Pris</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: "row", marginBottom: 10 }}>
                    <Image source={require('../assets/images/Profile7.jpg')} style={style.circle} />
                    <Text style={{ marginLeft: 9, marginTop: 12, fontFamily: 'bold', fontSize: 15 }}>Pris</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: "row", marginBottom: 10 }}>
                    <Image source={require('../assets/images/Profile8.jpg')} style={style.circle} />
                    <Text style={{ marginLeft: 9, marginTop: 12, fontFamily: 'bold', fontSize: 15 }}>Pris</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: "row", marginBottom: 10 }}>
                    <Image source={require('../assets/images/Profile1.jpg')} style={style.circle} />
                    <Text style={{ marginLeft: 9, marginTop: 12, fontFamily: 'bold', fontSize: 15 }}>Pris</Text>
                </TouchableOpacity>
            </ScrollView>}
            <FlatList
                data={message}
                renderItem={renderItem}
                keyExtractor={item => item.id}

            />

            {/* <ScrollView> */}
            {/* <Flatlist
                    data={message}
                    keyExtractor={item=>item.id}
                    renderItem={({item})=>(
                        <View>
                            <Text>{item.username}</Text>
                            <userImg source={item.userImg}/>
                        </View>
                    )}
                /> */}
            {/* {message} */}
            {/* <Image source={require('../assets/images/P.jpg')}/> */}
            {/* </ScrollView> */}
        </ScrollView>
    )
}

const style = StyleSheet.create({

    circle: {
        width: 80,
        height: 80,
        borderRadius: 50, // Half of width/height to make a circle
        backgroundColor: 'green',
        marginLeft: 9,
    },
    select: {
        height: 36,
        width: 75,
        borderWidth: 2,
        borderColor: "black",
        borderRadius: 99,
    },
    text: {
        fontSize: 19,
        marginLeft: 5,
    },
});
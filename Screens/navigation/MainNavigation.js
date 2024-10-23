// MainNavigation.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Chats from '../Bottom/Chats';
import Updates from '../Bottom/Updates';
// import Welcome from '../';
import Community from '../Bottom/Community';
import Calls from '../Bottom/Calls';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// const HomeStack = () => {
//     return (
//         <Stack.Navigator>
//             <Stack.Screen name="Chats" component={Chats} />
//             <Stack.Screen name="Updates" component={Updates} />
//             <Stack.Screen name="Community" component={Community} />
//         </Stack.Navigator>
//     );
// };

const SettingsStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Welcome" component={Welcome} />
        </Stack.Navigator>
    );
};

const MainNavigation = () => {
    return (
        <Tab.Navigator screenOptions={{
            tabBarActiveTintColor: "green",
            tabBarInactiveTintColor: "gray",
            headerShown: false,
        }}>
            <Tab.Screen name="Chats" component={Chats}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="message" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen name="Updates" component={Updates}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome6 name="comment-dots" color={color} size={size} />
                    ),
                }} />
            <Tab.Screen name='Community' component={Community}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome6 name="people-group" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen name="Calls" component={Calls}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="phone" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default MainNavigation;

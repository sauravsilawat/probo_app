import React from 'react';
import { Tabs } from 'expo-router';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity, View } from 'react-native';

export default function _layout() {
    return (
        <Tabs
            screenOptions={{
                tabBarShowLabel: false,
                tabBarActiveTintColor: 'black',
                tabBarInactiveTintColor: "#757575",
                tabBarStyle: {
                    height: 80,
                    position: 'absolute',
                },
                headerStyle: {
                    height: 150,
                    backgroundColor: "transparent",
                    shadowColor: "transparent",
                }
            }}
        >
            <Tabs.Screen
                name='index'
                options={{
                    title: '',
                    tabBarLabel: 'Home',
                    tabBarShowLabel: true,
                    tabBarLabelStyle: {
                        marginBottom: 15,
                        marginTop: -10,
                        fontSize: 11,
                    },
                    headerShown: true,
                    tabBarIcon: ({ color }) => (
                        <Icon name="home" size={30} color={color} />
                    ),
                    headerRight: () => (
                        <TouchableOpacity className="flex-row items-center mr-4 bg-white rounded-full relative" >
                            <MaterialCommunityIcons name="bell-outline" size={25} color="black" style={{ margin: 15 }} />
                            <View className="w-2 h-2 bg-red-500 rounded-full absolute top-0 right-3"></View>
                        </TouchableOpacity>
                    ),
                    headerLeft: () => (
                        <TouchableOpacity className="flex-row items-center ml-4 bg-[#EAECF0] rounded-full" >
                            <MaterialIcons name="person-outline" size={30} color="black" style={{ margin: 15 }} />
                        </TouchableOpacity>
                    ),
                }}
            />
            <Tabs.Screen
                name='search'
                options={{
                    title: 'search',
                    tabBarLabel: 'Search',
                    tabBarShowLabel: true,
                    tabBarLabelStyle: {
                        marginBottom: 15,
                        marginTop: -10,
                        fontSize: 11,
                    },
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <Icon name="search" size={30} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name='sports'
                options={{
                    title: 'sports',
                    tabBarLabel: 'Sports',
                    tabBarShowLabel: true,
                    tabBarLabelStyle: {
                        marginBottom: 15,
                        marginTop: -10,
                        fontSize: 11,
                    },
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <Icon name="trophy" size={30} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name='portfolio'
                options={{
                    title: 'portfolio',
                    tabBarLabel: 'Portfolio',
                    tabBarShowLabel: true,
                    tabBarLabelStyle: {
                        marginBottom: 15,
                        marginTop: -10,
                        fontSize: 11,
                    },
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <Icon name="briefcase" size={30} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name='wallet'
                options={{
                    title: 'wallet',
                    tabBarLabel: 'Wallet',
                    tabBarShowLabel: true,
                    tabBarLabelStyle: {
                        marginBottom: 15,
                        marginTop: -10,
                        fontSize: 11,
                    },
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <Icon name="credit-card" size={30} color={color} />
                    ),
                }}
            />
        </Tabs>
    );
}

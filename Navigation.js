import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';


//Pantallas
import HomeScreen from "./screens/HomeScreen";
import PerfilScreen from "./screens/PerfilScreen";
import RegistroUserScreen from "./screens/RegistroUserScreen";
import CitasScreen from "./screens/CitasScreen";
import DentroLocalScreen from "./screens/DentroLocalScreen";
import LoginScreen from "./screens/LoginScreen";
import RegistroEmpresaScreen from "./screens/RegistroEmpresaScreen";
import ReservarScreen from "./screens/ReservarScreen";
import CitasEmpresaScreen from "./screens/CitasEmpresaScreen";

const HomeStackNavigator = createNativeStackNavigator();

function MyStack() {
    return (
        <HomeStackNavigator.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{
            headerShown: false,
        }}
        >
            <HomeStackNavigator.Screen
                name="HomeScreen"
                component={HomeScreen}
            />
            <HomeStackNavigator.Screen
                name="Registro"
                component={RegistroUserScreen}
            />
            <HomeStackNavigator.Screen
                name="Local"
                component={DentroLocalScreen}
            />
            <HomeStackNavigator.Screen
                name="LoginUsuarios"
                component={LoginScreen}
            />
            <HomeStackNavigator.Screen
                name="RegistroEmpresa"
                component={RegistroEmpresaScreen}
            />
            <HomeStackNavigator.Screen
                name="Reserva"
                component={ReservarScreen}
            />
            <HomeStackNavigator.Screen
                name="CitasEmpresa"
                component={CitasEmpresaScreen}
            />
        </HomeStackNavigator.Navigator>
    )
}

const Tab = createBottomTabNavigator();

function Mytabs() {
    return (
        <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
            tabBarActiveTintColor: '#266150',
            tabBarInactiveBackgroundColor: '#fdf8d5',
            tabBarActiveBackgroundColor: '#fdf8d5',
            tabBarStyle: {
                height: 60,
                borderColor: "#cbcbbe",
                borderWidth: 3
            }
        }}
        >
            <Tab.Screen 
                name="Home" 
                component={MyStack}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home" size={24} color="#266150" />
                    ),
                    headerShown: false,
                }}
            />
            <Tab.Screen 
                name="Perfil" 
                component={PerfilScreen} 
                options={{
                    tabBarLabel: 'Perfil',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome6 name="user-large" size={24} color="#266150" />
                    ),
                    headerShown: false,
                }}
            />
            <Tab.Screen 
                name="Citas" 
                component={CitasScreen} 
                options={{
                    tabBarLabel: 'Citas',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="calendar" size={24} color="#266150" />
                    ),
                    headerShown: false,
                }}
            />
        </Tab.Navigator>
    );
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <Mytabs/>
        </NavigationContainer>
    );
}
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";
import RegistroUserScreen from "./RegistroUserScreen";

const PerfilScreen = () => {
    const user = {
        nombre: "Juan",
        apellidos: "Pérez García",
        telefono: "(123) 456-7890",
        correo: "juan.perez@example.com",
        fechaNacimiento: "-",
        genero: "-",
    };
    const navigation = useNavigation();
//Fuentes Personalizadas
const [fontsLoaded] = useFonts({
    Playfair: require('../assets/PlayfairDisplay-VariableFont_wght.ttf'),
    Raleway: require('../assets/Raleway-VariableFont_wght.ttf'),
});

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.userName}>{`${user.nombre} ${user.apellidos}`}</Text>
            </View>

            <TouchableOpacity
    onPress={() => navigation.navigate("Registro")} // ✅ Asegura que coincida con el nombre en el Stack
    style={styles.button}
>
    <Text style={styles.buttonRegistro}>Regístrate con Nosotros</Text>
</TouchableOpacity>




            <View style={styles.infoContainer}>
                <Text style={styles.infoText}>
                    <Text style={styles.label}>Nombre: </Text>
                    {user.nombre}
                </Text>
                <Text style={styles.infoText}>
                    <Text style={styles.label}>Apellidos: </Text>
                    {user.apellidos}
                </Text>
                <Text style={styles.infoText}>
                    <Text style={styles.label}>Número de teléfono móvil: </Text>
                    {user.telefono}
                </Text>
                <Text style={styles.infoText}>
                    <Text style={styles.label}>Email: </Text>
                    {user.correo}
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f1f1ec",
        padding: 20,
    },
    header: {
        alignItems: "center",
        marginBottom: 20,
        marginTop: 40,
    },
    userName: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#000",
        fontFamily: "Raleway"
    },
    infoContainer: {
        backgroundColor: "#fdf8d5",
        borderRadius: 10,
        padding: 20,
        marginTop: 10,
    },
    infoText: {
        fontSize: 16,
        color: "#000",
        marginBottom: 10,
        fontFamily: "Raleway"
    },
    label: {
        fontWeight: "bold",
        color: "#000",
    },
    button: {
        backgroundColor: "#266150",
        padding: 10,
        width: "50%",
        alignSelf: "center",
        borderRadius: 10,
        marginBottom: 20,
    }
});

export default PerfilScreen;

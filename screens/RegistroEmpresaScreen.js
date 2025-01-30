import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from "react-native";
import { useFonts } from "expo-font";

const RegistroEmpresaScreen = () => {
    const [nombre, setNombre] = useState('');
    const [rfc, setRfc] = useState('');
    const [direccion, setDireccion] = useState('');
    const [correoEmpresa, setCorreoEmpresa] = useState('');
    const [telefono, setTelefono] = useState('');
    const [correoAdmin, setCorreoAdmin] = useState('');
    const [contrasena, setContrasena] = useState('');

    const validarFormulario = () => {
        if (!nombre.trim()) {
            Alert.alert("Error", "El nombre de la empresa es obligatorio");
            return;
        }
        if (!rfc.trim()) {
            Alert.alert("Error", "El RFC es obligatorio");
            return;
        }
        if (!direccion.trim()) {
            Alert.alert("Error", "La dirección es obligatoria");
            return;
        }
        if (!correoEmpresa.includes('@')) {
            Alert.alert("Error", "El correo de la empresa debe ser válido");
            return;
        }
        if (!telefono.trim() || telefono.length < 10) {
            Alert.alert("Error", "El teléfono debe ser válido");
            return;
        }
        if (!correoAdmin.includes('@')) {
            Alert.alert("Error", "El correo del administrador debe ser válido");
            return;
        }
        if (contrasena.length < 6) {
            Alert.alert("Error", "La contraseña debe tener al menos 6 caracteres");
            return;
        }
        Alert.alert("Éxito", "Registro empresarial exitoso");
    };


//Fuentes Personalizadas
const [fontsLoaded] = useFonts({
    Playfair: require('../assets/PlayfairDisplay-VariableFont_wght.ttf'),
    Raleway: require('../assets/Raleway-VariableFont_wght.ttf'),
});
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Registra tu Empresa</Text>
            <TextInput
                style={styles.input}
                placeholder="Nombre de la empresa"
                value={nombre}
                onChangeText={setNombre}
            />
            <TextInput
                style={styles.input}
                placeholder="RFC"
                value={rfc}
                onChangeText={setRfc}
            />
            <TextInput
                style={styles.input}
                placeholder="Dirección"
                value={direccion}
                onChangeText={setDireccion}
            />
            <TextInput
                style={styles.input}
                placeholder="Correo de la empresa"
                value={correoEmpresa}
                onChangeText={setCorreoEmpresa}
                keyboardType="email-address"
            />
            <TextInput
                style={styles.input}
                placeholder="Teléfono"
                value={telefono}
                onChangeText={setTelefono}
                keyboardType="phone-pad"
            />
            <TextInput
                style={styles.input}
                placeholder="Correo del administrador"
                value={correoAdmin}
                onChangeText={setCorreoAdmin}
                keyboardType="email-address"
            />
            <TextInput
                style={styles.input}
                placeholder="Contraseña"
                value={contrasena}
                onChangeText={setContrasena}
                secureTextEntry={true}
            />
            <TouchableOpacity style={styles.button} onPress={validarFormulario}>
                <Text style={styles.buttonRegistro}>Registrar Empresa</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f1f1ec',
        padding: 20,
    },
    title: {
        fontSize: 25,
        textAlign: "center",
        marginVertical: 20,
        fontFamily: "Playfair"
    },
    input: {
        backgroundColor: "#fff",
        padding: 10,
        marginBottom: 15,
        borderRadius: 5,
        borderColor: "#ccc",
        borderWidth: 1,
        fontSize: 16,
    },
    button: {
        backgroundColor: "#266150",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
        marginTop: 10,
    },
    buttonRegistro: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
});

export default RegistroEmpresaScreen;

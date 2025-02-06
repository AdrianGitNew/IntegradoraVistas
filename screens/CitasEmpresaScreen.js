import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert, ScrollView } from "react-native";
import { useFonts } from "expo-font";

const CitasEmpresaScreen = () => {
  const [empresaCitas, setEmpresaCitas] = useState([
    {
      id: 1,
      servicio: "Corte de Cabello",
      fecha: "27 de enero de 2025",
      hora: "11:00 a.m.",
      precio: "$25.00",
      cliente: "Carlos Martínez",
      contacto: "carlosmartinez@gmail.com",
    },
    {
      id: 2,
      servicio: "Manicure Deluxe",
      fecha: "28 de enero de 2025",
      hora: "3:00 p.m.",
      precio: "$30.00",
      cliente: "Lucía Gómez",
      contacto: "lucia.gomez@example.com",
    },
  ]);

  const cancelarCita = (id) => {
    Alert.alert(
      "Cancelar Cita",
      "¿Estás seguro de que deseas cancelar esta cita?",
      [
        { text: "No", style: "cancel" },
        {
          text: "Sí",
          onPress: () => {
            setEmpresaCitas((prevCitas) => prevCitas.filter((cita) => cita.id !== id));
          },
        },
      ]
    );
  };

//Fuentes Personalizadas
    const [fontsLoaded] = useFonts({
    Playfair: require('../assets/PlayfairDisplay-VariableFont_wght.ttf'),
    Raleway: require('../assets/Raleway-VariableFont_wght.ttf'),
    });

  const renderCitas = (citas) => (
    <ScrollView>
      {citas.length > 0 ? (
        citas.map((cita) => (
          <View key={cita.id} style={styles.card}>
            <Text style={styles.serviceTitle}>{cita.servicio}</Text>
            <Text style={styles.serviceDetails}>Cliente: {cita.cliente}</Text>
            <Text style={styles.serviceDetails}>Contacto: {cita.contacto}</Text>
            <Text style={styles.serviceDetails}>Fecha: {cita.fecha}</Text>
            <Text style={styles.serviceDetails}>Hora: {cita.hora}</Text>
            <Text style={styles.serviceDetails}>Precio: {cita.precio}</Text>

            <TouchableOpacity
              style={styles.cancelButton}
              onPress={() => cancelarCita(cita.id)}
            >
              <Text style={styles.cancelButtonText}>Cancelar Cita</Text>
            </TouchableOpacity>
          </View>
        ))
      ) : (
        <View style={styles.card}>
          <Text style={styles.message}>No tienes citas programadas.</Text>
        </View>
      )}
    </ScrollView>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Citas Programadas</Text>
      {renderCitas(empresaCitas)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f1ec",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#033d3e",
    textAlign: "center",
    marginBottom: 20,
    fontFamily: "Playfair",
    marginTop: "5%"
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 20,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    borderLeftWidth: 5,
    borderLeftColor: "#266150",
  },
  serviceTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#033d3e",
    marginBottom: 10,
    fontFamily: "Raleway"
  },
  serviceDetails: {
    fontSize: 16,
    color: "#033d3e",
    marginBottom: 5,
    fontFamily: "Raleway"
  },
  cancelButton: {
    marginTop: 15,
    backgroundColor: "#c94c4c",
    padding: 10,
    borderRadius: 5,
  },
  cancelButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  message: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#033d3e",
    textAlign: "center",
  },
});

export default CitasEmpresaScreen;

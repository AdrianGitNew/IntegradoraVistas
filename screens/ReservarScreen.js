import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    Alert,
} from "react-native";
import { Calendar } from "react-native-calendars";

const ReservarScreen = ({ route }) => {
    const { servicio } = route.params; // Recibir los datos del servicio

    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);

    const today = new Date().toISOString().split("T")[0];

    const horarios = [
        "10:00 a.m.",
        "10:30 a.m.",
        "11:00 a.m.",
        "11:30 a.m.",
        "12:00 p.m.",
        "12:30 p.m.",
        "1:00 p.m.",
    ];

    const reservarCita = () => {
        if (!selectedDate || !selectedTime) {
            Alert.alert("Error", "Debes seleccionar un día y una hora.");
            return;
        }
        Alert.alert(
            "Reserva Confirmada",
            `Tu cita está programada para el ${selectedDate} a las ${selectedTime}.`
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.infoContainer}>
                <Text style={styles.serviceTitle}>{servicio.nombre}</Text>
                <Text style={styles.serviceDescription}>
                    {servicio.duracion} - {servicio.precio}
                </Text>
            </View>

            <Calendar
                onDayPress={(day) => setSelectedDate(day.dateString)}
                markedDates={{
                    [selectedDate]: {
                        selected: true,
                        marked: true,
                        selectedColor: "#266150",
                    },
                }}
                minDate={today}
                theme={{
                    selectedDayBackgroundColor: "#6B3F87",
                    selectedDayTextColor: "#ffffff",
                    todayTextColor: "#6B3F87",
                    arrowColor: "#6B3F87",
                }}
                style={styles.calendar}
            />

            <Text style={styles.subTitle}>Selecciona una hora</Text>
            <FlatList
                data={horarios}
                horizontal
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={[
                            styles.timeSlot,
                            selectedTime === item && styles.selectedTimeSlot,
                        ]}
                        onPress={() => setSelectedTime(item)}
                    >
                        <Text
                            style={[
                                styles.timeSlotText,
                                selectedTime === item && styles.selectedTimeSlotText,
                            ]}
                        >
                            {item}
                        </Text>
                    </TouchableOpacity>
                )}
                showsHorizontalScrollIndicator={false}
            />

            <TouchableOpacity style={styles.reserveButton} onPress={reservarCita}>
                <Text style={styles.reserveButtonText}>Reservar</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F9F5F3",
        padding: 20,
    },
    infoContainer: {
        marginBottom: 20,
    },
    serviceTitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#333",
        textAlign: "center",
        marginTop: "8%",
    },
    serviceDescription: {
        fontSize: 16,
        color: "#555",
        textAlign: "center",
        marginTop: 5,
    },
    calendar: {
        borderRadius: 10,
        marginBottom: 10,
    },
    subTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 10,
    },
    timeSlot: {
        backgroundColor: "#E0E0E0",
        padding: 15,
        borderRadius: 8,
        marginHorizontal: 5,
        alignItems: "center",
        width: 120, 
        height: 50, 
    },
    selectedTimeSlot: {
        backgroundColor: "#266150",
    },
    timeSlotText: {
        fontSize: 16,
        color: "#333",
    },
    selectedTimeSlotText: {
        color: "#fff",
    },
    reserveButton: {
        backgroundColor: "#266150",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
        marginTop: 20,
    },
    reserveButtonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
});


export default ReservarScreen;

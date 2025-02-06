import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";

const HomeScreen = () => {
    const navigation = useNavigation();


//Fuentes Personalizadas
    const [fontsLoaded] = useFonts({
    Playfair: require('../assets/PlayfairDisplay-VariableFont_wght.ttf'),
    Raleway: require('../assets/Raleway-VariableFont_wght.ttf'),
    });

    return (
        <ScrollView style={styles.container}> {/* Envolvemos todo el contenido en ScrollView */}
            <Text style={styles.title}>Bienvenido a StyleDate!</Text>
            
            <Text style={styles.TituloLocales}>Reserva tus servicios de belleza.</Text>
            
            {/* Contenedor de locales */}
            <View style={styles.localesContainer}>
                {/* Tarjeta del local 1 */}
                <TouchableOpacity
                    style={styles.card}
                    onPress={() => navigation.navigate("Local")}
                >
                    <Image
                        source={{ uri: "https://i.pinimg.com/originals/6c/bd/ee/6cbdee4d0050fff77ef812ea51a2ce4c.jpg" }}
                        style={styles.cardImage}
                    />
                    <Text style={styles.cardText}>
                        Estética Beautificiencia: Anaheim CA
                    </Text>
                </TouchableOpacity>
                
                {/* Tarjeta del local 2 */}
                <TouchableOpacity
                    style={styles.card}
                    onPress={() => navigation.navigate("LoginUsuarios")}
                >
                    <Image
                        source={{ uri: "https://www.esteticaimage.es/wp-content/uploads/2015/08/estetica-salon1.jpg" }}
                        style={styles.cardImage}
                    />
                    <Text style={styles.cardText}>
                        Salón Glamour: Los Angeles CA
                    </Text>
                </TouchableOpacity>
                
                {/* Tarjeta del local 3 */}
                <TouchableOpacity
                    style={styles.card}
                    onPress={() => navigation.navigate("RegistroEmpresa")}
                >
                    <Image
                        source={{ uri: "https://estudioniddo.com/wp-content/uploads/2019/01/img_destacada_17.jpg" }}
                        style={styles.cardImage}
                    />
                    <Text style={styles.cardText}>
                        Spa RelaxTime: San Diego CA
                    </Text>
                </TouchableOpacity>

                {/* Tarjeta del local 4 */}
                <TouchableOpacity
                    style={styles.card}
                    onPress={() => navigation.navigate("CitasEmpresa")}
                >
                    <Image
                        source={{ uri: "https://ledcst.com/wp-content/uploads/barber-shop-lights.webp" }}
                        style={styles.cardImage}
                    />
                    <Text style={styles.cardText}>
                        Barbería Elite: Fresno CA
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f1f1ec',
        padding: 10,
        borderColor: "#cbcbbe",
        borderWidth: 2
    },
    title: {
        fontSize: 30,
        textAlign: "center",
        marginTop: "10%",
        marginBottom: 10,
        fontFamily: "Playfair"
    },
    button: {
        backgroundColor: "#266150",
        padding: 10,
        width: "50%",
        alignSelf: "center",
        borderRadius: 10,
        marginBottom: 20,
    },
    buttonRegistro: {
        fontSize: 15,
        textAlign: "center",
        color: "white",
        fontFamily: "Raleway"
    },
    TituloLocales: {
        fontSize: 18,
        textAlign: "center",
        marginBottom: 10,
        color: "#333",
        fontFamily: "Playfair"
    },
    localesContainer: {
        flexDirection: "row",
        flexWrap: "wrap", 
        justifyContent: "space-between",
    },
    card: {
        backgroundColor: '#fdf8d5',
        borderRadius: 10,
        padding: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
        width: "49.5%", // Tamaño de la tarjeta para que quepan dos por fila
        marginBottom: 10,
        alignItems: "center",
        borderWidth: 1.5,
        borderColor: "#cbcbbe"
    },
    cardImage: {
        width: "100%",
        height: 100,
        borderRadius: 5,
        marginBottom: 10,
    },
    cardText: {
        textAlign: "center",
        fontSize: 14,
        color: "#333",
        fontFamily: "Raleway"
    },
});

export default HomeScreen;

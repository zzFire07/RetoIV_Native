import { View, Text, StyleSheet } from "react-native";
import Footer from '../components/Footer'

export function HomePage() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Home</Text>
            <Footer/> {/*Agregamos el footer aqui*/}
        </View>
    );
}
const styles= StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginTop: 50,
    },
});

export default HomePage;
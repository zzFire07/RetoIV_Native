import { StyleSheet, View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function PaymentStatusPage() {
  const params = useLocalSearchParams(); // Obtiene los parámetros de la URL

  return (
    <>
        <View style={styles.container}>
            <Text style={styles.title}>Payment Status</Text>
            <Text style={styles.text}>Payment ID: {params.payment_id}</Text>
            <Text style={styles.text}>Status: {params.status}</Text>
        </View>
    </>
  );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        backgroundColor: "white",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },
    text: {
        fontSize: 18,
    },
    });

import {View, Text, TouchableOpacity, StyleSheet} from "react-native";
import { Link } from "expo-router";


export default function LoginButton(){
    return(
        <View style={styles.container}>
            <Link href={"/LoginPage"} asChild>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Iniciar sesión</Text>
                </TouchableOpacity>
            </Link>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems: "center",
        justifyContent: "center",
    },
    button: {
        backgroundColor: "#255E13",
        padding: 10,
        borderRadius: 20,
        width: 270,
        height: 75,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 60,
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.5)",
    },

    buttonText: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
    }
})

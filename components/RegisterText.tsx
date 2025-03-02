import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { Link } from 'expo-router';

export default function RegisterText(){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>¿No tienes cuenta?</Text>
            <Link href={"/RegisterPage"} asChild>
                <TouchableOpacity>
                    <Text style={styles.buttonText}>Regístrate</Text>
                </TouchableOpacity>
            </Link>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20
    },
    text:{
        color: "#FFFF",
        fontSize: 18,
        fontWeight: "bold",
    },
    buttonText:{
        color: "#610602",
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: 5
    }
})
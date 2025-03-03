import React, {useState} from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import CustomHeader from "@/components/CustomHeader";
import WhatsAppButton from "@/components/unused-comps/WhatsAppButton";
import { LinearGradient } from 'expo-linear-gradient';
import { IconSymbol } from "@/components/ui/IconSymbol";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useAuth } from "@/context/AuthContext";





export default function RegisterPage() {
    const router= useRouter();
    
    const [email, setEmail]= useState("");
    const [password, setPassword] = useState("");
    const [isValid, setIsValid] = useState(false);
    const [error, setError] = useState("");


    const validateEmail = (text: string) => {
        setEmail(text);
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setIsValid(emailRegex.test(text));
    };

    const handleRegister = async () => {
        if  (!email || !password) {
            alert("Por favor, complete todos los campos.");
            return;
        }
        if (password.length < 8) {
            alert("la contraseña debe contener minimo 8 caracteres");
            return;
        }
        if (!isValid) {
            alert("correo no valido");
            return;
        }
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            //const user = await apiService.logUser();
            router.back(); // Cierra el register page.
        } catch (error) {
            console.error("Error en el registro:", error);
            alert("Error al registrarse, intenta nuevamente.");
        }
    };

    return ( 
        <>
        <CustomHeader title="Club Ituzaingo" />
         <View style={styles.container}>
            <Text style={styles.title}>Registrarse</Text>
            <View style={styles.content}>
                <View style={styles.inputContainer}>
                    <View style={{flexDirection: "row", alignItems: "center"}}>
                        <IconSymbol style={{marginRight: 5}} name="envelope.fill" size={25} color="black" />
                        <Text style={styles.inputText}>Correo electrónico</Text>
                    </View>
                    <TextInput
                        style={styles.input}
                        placeholder=""
                        keyboardType="email-address"
                        autoCapitalize="none"
                        value={email}
                        onChangeText={validateEmail}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <View style={{flexDirection: "row", alignItems: "center"}}>
                        <IconSymbol style={{marginRight: 5}} name="lock.fill" size={25} color="black" />
                        <Text style={styles.inputText}>Contraseña</Text>
                    </View>
                    <TextInput
                        style={styles.input}
                        placeholder=""
                        secureTextEntry
                        value={password}
                        onChangeText={setPassword}
                    />
                </View>
                <TouchableOpacity onPress={handleRegister}>
                    <LinearGradient style={styles.button} colors={['#255E13', '#4DC428']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
                        <Text style={styles.buttonText}> Registrarse </Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
         </View>
         <WhatsAppButton />
        </>
    );
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        backgroundColor: "white",
    },
    title:{
        fontSize: 35,
        fontWeight: "500",
        marginTop: 30,
        marginBottom: 30,
    },
    content:{
        width:308,
        borderRadius:25,
        backgroundColor: "#95D3A1",
        alignItems: "center",
        paddingTop: 25
    }, 
    inputContainer:{
        width: "80%",
        alignSelf: "center",
        marginBottom: 25,
    },
    inputText:{
        fontSize: 20,
        marginTop: 10,
        marginBottom: 5,
    },
    input:{
        width: 254,
        height: 41,
        backgroundColor: "#e7e7e7",
        borderRadius: 40, 
        paddingLeft: 10,   
    },
    button: {
        width: 270,
        height: 54,
        backgroundColor: "#255E13",
        borderRadius: 40,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 25,
        marginBottom: 25 + 25 // 25 de margen del boton mas 25 de margen del inputcontainer, para que quede centrado
    },
    buttonText:{
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
    }
});
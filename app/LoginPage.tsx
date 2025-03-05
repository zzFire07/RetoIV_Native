import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, TouchableWithoutFeedback, Keyboard } from "react-native";
import WhatsAppButton from "@/components/WhatsAppButton";
import CustomHeader from "@/components/CustomHeader";
import { LinearGradient } from 'expo-linear-gradient';
import { IconSymbol } from "@/components/ui/IconSymbol";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useRouter } from "expo-router";
import apiService from "@/services/apiService"; // Asegúrate de importar el servicio correctamente


export function LoginPage () {
    const [email, setEmail]= useState("");
    const [password, setPassword]= useState("");
    const [isValid, setIsValid] = useState(false);
    const [error, setError] = useState("");

    const router = useRouter();

    const validateEmail = (text: string) => {
        setEmail(text);
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setIsValid(emailRegex.test(text));
    }

    const firebaseLogin = async () => {
        try {
          const userCredential = await signInWithEmailAndPassword(auth, email, password);
          //const user = await apiService.logUser();
          //console.log("Usuario logged in:", user);
          router.back(); // cierra el login page.
        } catch (err: any) {
            var errorCode = err.code;
            var errorMessage = err.message;
            if (errorCode === "auth/invalid-email") {
                alert("Correo electrónico no válido");
            } else if (errorCode === "auth/invalid-credential") {
                alert("Credenciales no válidas");
            } else if (errorCode === "auth/missing-password") {
                alert("Falta la contraseña");
            } else {
                alert(errorMessage);
            } 
      }
    }


    return (
       <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={{flex: 1}}>
            <CustomHeader/>
            <View style= {styles.container}>
                    <Text style= {styles.title}>Iniciar Sesión</Text>
                    <View style={styles.content}>
                        <Text style={styles.subtitle}>Bienvenido</Text>
                        <View style={styles.inputContainer}>
                            <View style={{flexDirection: "row", alignItems: "center"}}>
                                <IconSymbol name="envelope.fill" size={30} color="black" />
                                <Text style={styles.inputText}>Correo electrónico</Text>
                            </View>
                            <TextInput
                                style={styles.input}
                                placeholder="Correo electrónico"
                                keyboardType="email-address"
                                value={email}
                                onChangeText={validateEmail}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <View style={{flexDirection: "row", alignItems: "center"}}>
                                <IconSymbol name="lock.fill" size={30} color="black" />
                                <Text style={styles.inputText}>Contraseña</Text>
                            </View>
                            <TextInput
                                style={styles.input}
                                placeholder="Contraseña"
                                secureTextEntry
                                value={password}
                                onChangeText={setPassword}
                            />
                        </View>
                        <TouchableOpacity onPress={firebaseLogin}>
                            <LinearGradient style={styles.button} colors={['#255E13', '#4DC428']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
                                <Text style={styles.buttonText}> Iniciar sesión </Text>
                            </LinearGradient>
                        </TouchableOpacity>
                        {/* <Text style={styles.forgotPasswordText}>¿Olvidaste tu contraseña? Recuperala aqui</Text> */}
                    </View>
            </View>
            <WhatsAppButton/>
        </View>
       </TouchableWithoutFeedback>
    );
}

const styles= StyleSheet.create({
    container: {
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
        height:485,
        borderRadius:25,
        backgroundColor: "#95D3A1",
        paddingTop: 25
    },
    subtitle:{
        fontSize: 30,
        fontWeight: "300",
        marginBottom: 40,
        alignSelf: "center"
    },
    inputContainer:{
        width: "80%",
        alignSelf: "center",
    },
    inputText:{
        fontSize: 20,
        marginTop: 10,
        marginBottom: 5,
        marginLeft: 5,
        textAlign: "left",
    
    },
    input:{
        width: "100%",
        height: 41,
        marginBottom: 35,
        backgroundColor: "#e7e7e7",
        borderRadius: 40, 
        paddingLeft: 10,   
        alignSelf: "center",

    },
    button: {
        width: 270,
        height: 54,
        backgroundColor: "#255E13",
        borderRadius: 40,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 25,
        boxShadow: "0px 3px 3px rgba(0, 0, 0, 0.3)",
        alignSelf: "center",
    },
    buttonText:{
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
    },
    /*forgotPasswordText:{
        fontSize: 14,
        marginTop: 20,
        alignSelf: "center",
    }*/

});

export default LoginPage;
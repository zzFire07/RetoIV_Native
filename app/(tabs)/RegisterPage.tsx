import React, {useState} from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import apiService from "@/services/apiService";
import CustomHeader from "@/components/CustomHeader";


export default function RegisterPage() {
    const router= useRouter();

    const [nombre, setNombre]= useState("");
    const [telefono, setTelefono]= useState("");
    const [email, setEmail]= useState("");
    const [password, setPassword] = useState("");
    const [isValid, setIsValid] = useState(false);

    const validateEmail = (text: string) => {
        setEmail(text);
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setIsValid(emailRegex.test(text));
    };

    const handleRegister = async () => {
        if (!nombre || !telefono || !email || !password) {
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
            //await apiService.createUser({ nombre, email, password});
            alert("Registro exitoso!");
            router.back();
        } catch (error) {
            console.error("Error en el registro:", error);
            alert("Error al registrarse, intenta nuevamente.");
        }
    };

    return ( 
        <View style={styles.pageContainer}>
            <CustomHeader title="Club Ituzaingo" />

            <View style={ styles.container}>
                <Text style={styles.title}>Registrarse</Text>
                <View style={styles.inputContainer}>
                    <Text style={styles.text}>Nombre</Text>
                    <TextInput 
                        style={styles.input}
                        placeholder=""
                        value={nombre}
                        onChangeText={setNombre}
                    
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.text}>Telefono</Text>
                    <TextInput
                        style={styles.input}
                        placeholder=""
                        value={telefono}
                        onChangeText={setTelefono}
                        inputMode="tel"

                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.text}>Correo electrónico</Text>
                    <TextInput
                        style={styles.input}
                        placeholder=""
                        keyboardType="email-address"
                        autoCapitalize="none"
                        value={email}
                        //onChangeText={setEmail}
                        onChangeText={validateEmail}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.text}>Contraseña</Text>
                    <TextInput 
                        style={styles.input}
                        placeholder=""
                        secureTextEntry
                        value={password}
                        onChangeText={setPassword}
                    
                    />
                </View>
                <TouchableOpacity style={styles.button} onPress={handleRegister}>
                    <Text style={styles.buttonText}>Registrarse</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    inputContainer:{
        width: "100%",
        marginBottom: 10,
        marginLeft: 55
        },
    text:{
        fontWeight: "bold",
        marginBottom: 5
    },
    pageContainer:{
        flex:1,
        backgroundColor: "white",
    },
    container: {
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
      input: {
        width: "80%",
        padding: 12,
        marginBottom: 10,
        borderWidth: 1,
        backgroundColor: "#e7e7e7",
        borderColor: "#ccc",
        borderRadius: 8,
      },
      button: {
        backgroundColor: "#11aa5a",
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignItems: "center",
        width: "80%",
        marginTop: 10,
      },
      buttonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
      },
      link: {
        color: "#00bf63",
        marginTop: 15,
        fontSize: 16,
      },
});
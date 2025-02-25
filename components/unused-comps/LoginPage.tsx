import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

export function LoginPage () {
    const [email, setEmail]= useState(" ");
    const [password, setPassword]= useState(" ");

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Inicio de sesión</Text>

            <TextInput
                style={styles.input}
                placeholder="Correo electrónico"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder="Contraseña"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            <TouchableOpacity style={styles.button}>
                <Text style={styles.linkText}>¿Olvidó su contraseña?</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles= StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        padding: 20,
    },
    title: {
        fontSize: 19,
        fontWeight: "bold",
        marginBottom: 20,
    },
    input: {
        width: "100%",
        height: 50,
        borderWidth: 1,
        borderColor:"#ccc",
        borderRadius:5,
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    button: {
        width: "100%",
        height: 50,
        backgroundColor: "black",
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 10,
    },
    buttonText: {
        color: "white",
        fontSize: 18,
    },
    linksContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        marginTop: 10,
    },
    linkText: {
        fontSize: 14,
        color: "blue",
    },

});

export default LoginPage;
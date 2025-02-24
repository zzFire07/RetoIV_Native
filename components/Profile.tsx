import React from "react";
import { View, Text, StyleSheet } from "react-native";

export function Profile() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Perfil WIP</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
    },
    title: {
        fontSize: 19,
        fontWeight: "bold",
        marginBottom: 20,
    },
});